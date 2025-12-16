import { Fragment, useState } from "react";

export default function RAProductLicense() {
  const [activeTab, setActiveTab] = useState("overview");

  const licenseData = {
    approved: {
      testLicense: { siteI: "04", siteV: "02" },
      manufacturingLicense: { siteI: "21", siteV: "04" },
      conditionFulfillment: { siteI: "04", siteV: "NA" },
      total: { siteI: "29", siteV: "06" }
    },
    submitted: {
      testLicense: { siteI: "04", siteV: "02" },
      manufacturingLicense: { siteI: "53", siteV: "14" },
      conditionFulfillment: { siteI: "NA", siteV: "NA" },
      total: { siteI: "57", siteV: "16" }
    },
    inprocess: {
      testLicense: { siteI: "", siteV: "02" },
      manufacturingLicense: { siteI: "32", siteV: "10" },
      conditionFulfillment: { siteI: "NA", siteV: "NA" },
      total: { siteI: "32", siteV: "12" }
    }
  };

  const inprocessDetails = [
    {
      type: "Test license",
      queryResponded: "08",
      underQuery: "03",
      products: [
        { name: "Truenat® Dengue/Zika (Reapplication)", site: "I", status: "Awaiting CDSCO approved testing lab" },
        { name: "Truenat® CHPV", site: "I & V", status: "No CDSCO approved predicate device" }
      ]
    },
    {
      type: "Manufacturing license",
      queryResponded: "55",
      underQuery: "01",
      products: [
        { name: "Truenat® KFDV", site: "I", status: "Approval of Form MD-29" }
      ]
    },
    {
      type: "Condition Fulfillment",
      queryResponded: "09",
      underQuery: "06",
      products: [
        { name: "Truenat® MTB, Truenat® MTB Plus, Truenat® MTB RIF Dx, Truenat® HCV, Truenat® CT & Truenat® COVID-19", site: "V", status: "Stability study and PER for EPTB Sample as claimed in IFU" }
      ]
    },
    {
      type: "New IVD",
      queryResponded: "01",
      underQuery: "07",
      products: [
        { name: "Truenat® KFDV", site: "I", status: "Clinical evaluation data on specimen collected from feild and statistically powered sample size" },
        { name: "Multiple COVID products", site: "I", status: "Recent Clinical evaluation data (last 1 year)" }
      ]
    },
    {
      type: "Retention License",
      queryResponded: "27",
      underQuery: "00"
    },
    {
      type: "Clinical Investigation",
      queryResponded: "01",
      underQuery: "00"
    }
  ];

  const pipelineProducts = [
    { id: "01", name: "Truecyte", desc: "AI based digital pathology", status: "Awaiting product details" },
    { id: "02", name: "Trueamp Mini", desc: "Real Time Multiplex qPCR Analyzer", status: "Awaiting approved user manual" },
    { id: "03", name: "Trueamp HPV-HR Genotyping", desc: "Real Time PCR Test for Human Papillomavirus High Risk Types 16/18/33/35, 31/39/45, 51/52/56/58, 59/66/68", status: "Awaiting finalised product details" },
    { id: "04", name: "Truepoc", desc: "Integrated point-of-care NAAT platform", status: "Awaiting product details" },
    { id: "05", name: "Trueprep Mag V2", desc: "", status: "Awaiting product details" },
    { id: "06", name: "Trueprep Mag V3", desc: "", status: "Awaiting product details" },
    { id: "07", name: "Trueamp CureDx-TB", desc: "Real-time reverse transcription polymerase chain reaction (RT-PCR) assay", status: "Awaiting finalised product details" },
    { id: "08", name: "Truenat Ebola-Marburg", desc: "Chip-based Real Time PCR Test for Ebola and Marburg virus", status: "No provision for International Testing Sites" }
  ];

  return (
    <section
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        padding: "25px 40px",
        position: "relative",
        overflow: "auto"
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          borderBottom: "3px solid #3b82f6"
        }}
      >
        <h1
          style={{
            fontSize: "2.5em",
            fontWeight: "900",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 10px 0",
            letterSpacing: "-0.02em"
          }}
        >
          Product License CLA/SLA
        </h1>
        <p
          style={{
            fontSize: "1.1em",
            color: "#64748b",
            margin: "0 0 15px 0",
            fontWeight: "600"
          }}
        >
          Central and State Licensing Authority • July 2025 - December 2025
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        {[
          { id: "overview", label: "Overview" },
          { id: "inprocess", label: "Inprocess Details" },
          { id: "pipeline", label: "Products in Pipeline" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "12px 24px",
              fontSize: "1em",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background:
                activeTab === tab.id
                  ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                  : "#ffffff",
              color: activeTab === tab.id ? "#ffffff" : "#64748b",
              boxShadow:
                activeTab === tab.id
                  ? "0 4px 15px rgba(59, 130, 246, 0.3)"
                  : "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto repeat(3, 1fr)",
            gap: "15px",
            flex: 1
          }}
        >
          <div style={{ gridColumn: "1" }}></div>

          <div
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0891b2)",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)"
            }}
          >
            <h3 style={{ fontSize: "1.8em", fontWeight: "900", margin: "0 0 10px 0" }}>
              Approved
            </h3>
            <div
              style={{
                width: "60px",
                height: "60px",
                margin: "10px auto",
                background: "#ffffff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2em"
              }}
            >
              ✓
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)"
            }}
          >
            <h3 style={{ fontSize: "1.8em", fontWeight: "900", margin: "0 0 10px 0" }}>
              Submitted
            </h3>
            <div
              style={{
                width: "60px",
                height: "60px",
                margin: "10px auto",
                background: "#ffffff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2em"
              }}
            >
              📨
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #64748b, #475569)",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0 4px 15px rgba(100, 116, 139, 0.3)"
            }}
          >
            <h3 style={{ fontSize: "1.8em", fontWeight: "900", margin: "0 0 10px 0" }}>
              Inprocess
            </h3>
            <div
              style={{
                width: "60px",
                height: "60px",
                margin: "10px auto",
                background: "#ffffff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2em"
              }}
            >
              ⚙️
            </div>
          </div>

          {[
            { label: "Test license", key: "testLicense" },
            { label: "Manufacturing license", key: "manufacturingLicense" },
            { label: "Condition fulfillment", key: "conditionFulfillment" },
            { label: "Total", key: "total" }
          ].map((row) => (
            <Fragment key={row.key}>
              <div
                style={{
                  background:
                    row.key === "total"
                      ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                      : "#ffffff",
                  borderRadius: "12px",
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: "1.1em",
                  color: row.key === "total" ? "#ffffff" : "#0f172a",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  border: row.key === "total" ? "3px solid #3b82f6" : "none"
                }}
              >
                {row.label}
              </div>

              {["approved", "submitted", "inprocess"].map((status) => (
                <div
                  key={status}
                  style={{
                    background: "#ffffff",
                    borderRadius: "12px",
                    padding: "15px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    border: row.key === "total" ? "3px solid #3b82f6" : "2px solid #e2e8f0"
                  }}
                >
                  <div style={{ fontSize: "0.9em", color: "#64748b", fontWeight: "600", marginBottom: "8px" }}>
                    Site I -
                    <span style={{ fontSize: "1.6em", color: "#0f172a", fontWeight: "900" }}>
                      {licenseData[status][row.key].siteI || "NA"}
                    </span> products
                  </div>
                  <div style={{ fontSize: "0.9em", color: "#64748b", fontWeight: "600" }}>
                    Site V -
                    <span style={{ fontSize: "1.6em", color: "#0f172a", fontWeight: "900" }}>
                      {licenseData[status][row.key].siteV || "NA"}
                    </span> products
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      )}

      {activeTab === "inprocess" && (
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "25px",
              padding: "20px",
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "40px"
              }}
            >
              <div>
                <div style={{ fontSize: "1.2em", color: "#3b82f6", fontWeight: "700", marginBottom: "5px" }}>
                  TEST LICENSE
                </div>
                <div style={{ fontSize: "0.9em", color: "#64748b" }}>
                  Query responded: <strong>08</strong> | Under query: <strong>03</strong>
                </div>
              </div>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "1.5em",
                  fontWeight: "900",
                  boxShadow: "0 8px 25px rgba(6, 182, 212, 0.4)"
                }}
              >
                INPROCESS
              </div>
              <div>
                <div style={{ fontSize: "1.2em", color: "#f59e0b", fontWeight: "700", marginBottom: "5px" }}>
                  MANUFACTURING LICENSE
                </div>
                <div style={{ fontSize: "0.9em", color: "#64748b" }}>
                  Query responded: <strong>55</strong> | Under query: <strong>01</strong>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "15px" }}>
              <div>
                <div style={{ fontSize: "1.1em", color: "#14b8a6", fontWeight: "700" }}>
                  CONDITION FULFILLMENT
                </div>
                <div style={{ fontSize: "0.9em", color: "#64748b" }}>
                  Query responded: <strong>09</strong> | Under query: <strong>06</strong>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.1em", color: "#06b6d4", fontWeight: "700" }}>
                  CLINICAL INVESTIGATION
                </div>
                <div style={{ fontSize: "0.9em", color: "#64748b" }}>
                  Query responded: <strong>01</strong>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ fontSize: "1.1em", color: "#8b5cf6", fontWeight: "700" }}>NEW IVD</div>
              <div style={{ fontSize: "0.9em", color: "#64748b" }}>Under query: <strong>07</strong></div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div style={{ fontSize: "1.1em", color: "#3b82f6", fontWeight: "700" }}>RETENTION LICENSE</div>
              <div style={{ fontSize: "0.9em", color: "#64748b" }}>Query responded: <strong>27</strong></div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#ffffff" }}>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "700", fontSize: "1em" }}>
                    Sr. No.
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "700", fontSize: "1em" }}>
                    Type of license
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "700", fontSize: "1em" }}>
                    Product Name
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "700", fontSize: "1em" }}>
                    Site
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "700", fontSize: "1em" }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {inprocessDetails.flatMap((item, idx) =>
                  item.products
                    ? item.products.map((product, pIdx) => (
                        <tr
                          key={`${idx}-${pIdx}`}
                          style={{
                            borderBottom: "1px solid #e2e8f0",
                            transition: "background 0.2s ease"
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <td style={{ padding: "12px 15px", fontWeight: "600", color: "#64748b" }}>
                            {pIdx === 0 ? String(idx + 1).padStart(2, "0") : ""}
                          </td>
                          <td style={{ padding: "12px 15px", fontWeight: "600", color: "#0f172a" }}>
                            {pIdx === 0 ? item.type : ""}
                          </td>
                          <td style={{ padding: "12px 15px", color: "#475569", fontSize: "0.95em" }}>
                            {product.name}
                          </td>
                          <td style={{ padding: "12px 15px", textAlign: "center", fontWeight: "700", color: "#3b82f6" }}>
                            {product.site}
                          </td>
                          <td style={{ padding: "12px 15px", color: "#64748b", fontSize: "0.9em" }}>
                            {product.status}
                          </td>
                        </tr>
                      ))
                    : (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: "1px solid #e2e8f0",
                            background: "#f8fafc"
                          }}
                        >
                          <td style={{ padding: "12px 15px", fontWeight: "600", color: "#64748b" }}>
                            {String(idx + 1).padStart(2, "0")}
                          </td>
                          <td style={{ padding: "12px 15px", fontWeight: "600", color: "#0f172a" }}>
                            {item.type}
                          </td>
                          <td colSpan="3" style={{ padding: "12px 15px", color: "#64748b", fontStyle: "italic" }}>
                            Query responded: {item.queryResponded} | Under query: {item.underQuery}
                          </td>
                        </tr>
                      )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "pipeline" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            flex: 1
          }}
        >
          {pipelineProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "2px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.2)";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "1.5em",
                  fontWeight: "900",
                  boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)"
                }}
              >
                {product.id}
              </div>
              <h3
                style={{
                  fontSize: "1.2em",
                  fontWeight: "800",
                  color: "#0f172a",
                  margin: 0
                }}
              >
                {product.name}
              </h3>
              {product.desc && (
                <p
                  style={{
                    fontSize: "0.85em",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.4
                  }}
                >
                  {product.desc}
                </p>
              )}
              <div
                style={{
                  marginTop: "auto",
                  padding: "8px 12px",
                  background: "#fef3c7",
                  borderRadius: "8px",
                  fontSize: "0.8em",
                  color: "#d97706",
                  fontWeight: "600",
                  textAlign: "center"
                }}
              >
                {product.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
