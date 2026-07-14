import Markdown from "react-markdown";
import "./ReportViewer.css";

function ReportViewer({ result }) {

    if(!result) return null;

    return (

        <div className="report-container">

            <h2>📄 Research Report</h2>

            <div className="report-card">

                <Markdown>{result}</Markdown>

            </div>

        </div>

    )

}

export default ReportViewer;
