from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import StreamingResponse

from pipeline import run_research_pipeline
from pipeline import run_research_pipeline_stream


app = FastAPI(                    # This Function creates my API application.
    title="Multi Agent Research API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Production me React domain use karo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Schema
class ResearchRequest(BaseModel):
    query: str

# Root Route
@app.get("/")  #this is check health our  server is running or not  
async def home():
    return {
        "status": "success",
        "message": "Research API Running"
    }

# Research Route
@app.post("/research")  # this is actually give request to pipeline 
async def research(data: ResearchRequest):

    try :

        result = run_research_pipeline(
            data.query
        )

        return{
            "status" :"sucess",
            "query" :data.query,
            "result" :result
        }
    except Exception as e:

        raise HTTPException(
            status_code= 500,
            detail=str(e)
        )
    

# new route for streaming 

@app.post("/research-stream")
async def research_stream(data:ResearchRequest):


    return StreamingResponse(

        run_research_pipeline_stream(
            data.query
        ),

        media_type="text/event-stream"

    )
