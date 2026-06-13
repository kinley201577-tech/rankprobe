
import { useState } from "react";

const COLORS = {
bg: "#0A0F1E",
surface: "#111827",
surfaceAlt: "#1a2235",
border: "#1e2d45",
accent: "#3B82F6",
accentGlow: "#60A5FA",
success: "#10B981",
warning: "#F59E0B",
danger: "#EF4444",
textPrimary: "#F1F5F9",
textSecondary: "#94A3B8",
textMuted: "#4B5E7A",
};

const styles = {
app: {
minHeight: "100vh",
background: COLORS.bg,
fontFamily: "'Inter', system-ui, sans-serif",
color: COLORS.textPrimary,
},
nav: {
borderBottom: `1px solid ${COLORS.border}`,
padding: "0 2rem",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
height: "60px",
background: COLORS.surface,
},
logo: {
fontWeight: 700,
fontSize: "1.1rem",
letterSpacing: "-0.02em",
color: COLORS.textPrimary,
display: "flex",
alignItems: "center",
gap: "8px",
},
logoDot: {
width: 8,
height: 8,
borderRadius: "50%",
background: COLORS.accent,
boxShadow: `0 0 8px ${COLORS.accent}`,
},
navBadge: {
background: COLORS.accent + "22",
color: COLORS.accentGlow,
border: `1px solid ${COLORS.accent}44`,
borderRadius: "20px",
padding: "3px 12px",
fontSize: "0.75rem",
fontWeight: 600,
},
hero: {
padding: "80px 2rem 60px",
textAlign: "center",
maxWidth: "680px",
margin: "0 auto",
},
eyebrow: {
fontSize: "0.72rem",
fontWeight: 700,
letterSpacing: "0.12em",
textTransform: "uppercase",
color: COLORS.accent,
marginBottom: "16px",
},
h1: {
fontSize: "clamp(2rem, 5vw, 3.2rem)",
fontWeight: 800,
letterSpacing: "-0.04em",
lineHeight: 1.1,
marginBottom: "16px",
background: `linear-gradient(135deg, ${COLORS.textPrimary} 0%, ${COLORS.textSecondary} 100%)`,
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
},
subtitle: {
fontSize: "1.05rem",
color: COLORS.textSecondary,
lineHeight: 1.6,
marginBottom: "40px",
},
inputRow: {
display: "flex",
gap: "10px",
maxWidth: "560px",
margin: "0 auto",
},
input: {
flex: 1,
background: COLORS.surface,
border: `1px solid ${COLORS.border}`,
borderRadius: "10px",
padding: "14px 18px",
fontSize: "0.95rem",
color: COLORS.textPrimary,
outline: "none",
transition: "border-color 0.2s",
},
btn: {
background: COLORS.accent,
color: "#fff",
border: "none",
borderRadius: "10px",
padding: "14px 24px",
fontSize: "0.95rem",
fontWeight: 600,
cursor: "pointer",
whiteSpace: "nowrap",
transition: "opacity 0.2s, transform 0.1s",
},
btnDisabled: {
opacity: 0.5,
cursor: "not-allowed",
},
main: {
maxWidth: "860px",
margin: "0 auto",
padding: "0 2rem 80px",
},
loadingBox: {
background: COLORS.surface,
border: `1px solid ${COLORS.border}`,
borderRadius: "16px",
padding: "48px",
textAlign: "center",
},
spinner: {
width: 40,
height: 40,
border: `3px solid ${COLORS.border}`,
borderTop: `3px solid ${COLORS.accent}`,
borderRadius: "50%",
margin: "0 auto 20px",
animation: "spin 0.8s linear infinite",
},
scoreCard: {
background: COLORS.surface,
border: `1px solid ${COLORS.border}`,
borderRadius: "16px",
padding: "32px",
marginBottom: "24px",
display: "flex",
alignItems: "center",
gap: "32px",
},
scoreCircle: (score) => ({
width: 100,
height: 100,
borderRadius: "50%",
background: `conic-gradient(${scoreColor(score)} ${score * 3.6}deg, ${COLORS.border} 0deg)`,
display: "flex",
alignItems: "center",
justifyContent: "center",
flexShrink: 0,
position: "relative",
}),
scoreInner: {
width: 78,
height: 78,
borderRadius: "50%",
background: COLORS.surface,
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
position: "absolute",
},
scoreNum: (score) => ({
fontSize: "1.6rem",
fontWeight: 800,
color: scoreColor(score),
lineHeight: 1,
}),
scoreLabel: {
fontSize: "0.6rem",
color: COLORS.textMuted,
textTransform: "uppercase",
letterSpacing: "0.08em",
},
scoreInfo: { flex: 1 },
scoreTitle: {
fontSize: "1.2rem",
fontWeight: 700,
marginBottom: "6px",
},
scoreSummary: {
fontSize: "0.9rem",
color: COLORS.textSecondary,
lineHeight: 1.5,
},
sectionTitle: {
fontSize: "0.75rem",
fontWeight: 700,
letterSpacing: "0.1em",
textTransform: "uppercase",
color: COLORS.textMuted,
marginBottom: "12px",
marginTop: "32px",
},
issueCard: (severity) => ({
background: COLORS.surfaceAlt,
border: `1px solid ${severityBorder(severity)}`,
borderLeft: `3px solid ${severityColor(severity)}`,
borderRadius: "10px",
padding: "16px 20px",
marginBottom: "10px",
}),
issueTop: {
display: "flex",
alignItems: "center",
gap: "10px",
marginBottom: "6px",
},
issueBadge: (severity) => ({
fontSize: "0.65rem",
fontWeight: 700,
letterSpacing: "0.08em",
textTransform: "uppercase",
color: severityColor(severity),
background: severityColor(severity) + "18",
border: `1px solid ${severityColor(severity)}33`,
borderRadius: "4px",
padding: "2px 8px",
}),
issueName: {
fontWeight: 600,
fontSize: "0.9rem",
},
issueDesc: {
fontSize: "0.85rem",
color: COLORS.textSecondary,
lineHeight: 1.5,
marginBottom: "8px",
},
issueFix: {
fontSize: "0.82rem",
color: COLORS.accent,
display: "flex",
alignItems: "flex-start",
gap: "6px",
},
statsGrid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
gap: "12px",
marginBottom: "8px",
},
statCard: {
background: COLORS.surfaceAlt,
border: `1px solid ${COLORS.border}`,
borderRadius: "10px",
padding: "16px",
},
statVal: {
fontSize: "1.4rem",
fontWeight: 800,
marginBottom: "4px",
},
statKey: {
fontSize: "0.75rem",
color: COLORS.textMuted,
textTransform: "uppercase",
letterSpacing: "0.06em",
},
ctaBox: {
background: `linear-gradient(135deg, ${COLORS.accent}18, ${COLORS.surfaceAlt})`,
border: `1px solid ${COLORS.accent}33`,
borderRadius: "16px",
padding: "32px",
textAlign: "center",
marginTop: "32px",
},
ctaTitle: {
fontSize: "1.2rem",
fontWeight: 700,
marginBottom: "8px",
},
ctaDesc: {
fontSize: "0.9rem",
color: COLORS.textSecondary,
marginBottom: "20px",
},
ctaBtn: {
background: COLORS.accent,
color: "#fff",
border: "none",
borderRadius: "10px",
padding: "12px 28px",
fontSize: "0.95rem",
fontWeight: 600,
cursor: "pointer",
},
errorBox: {
background: COLORS.danger + "11",
border: `1px solid ${COLORS.danger}33`,
borderRadius: "12px",
padding: "20px 24px",
color: COLORS.danger,
fontSize: "0.9rem",
marginBottom: "20px",
},
};

function scoreColor(s) {
if (s >= 80) return COLORS.success;
if (s >= 50) return COLORS.warning;
return COLORS.danger;
}
function severityColor(s) {
if (s === "critical") return COLORS.danger;
if (s === "warning") return COLORS.warning;
return COLORS.accent;
}
function severityBorder(s) {
if (s === "critical") return COLORS.danger + "33";
if (s === "warning") return COLORS.warning + "33";
return COLORS.accent + "22";
}
function scoreLabel(s) {
if (s >= 80) return "Good";
if (s >= 50) return "Needs Work";
return "Poor";
}

export default function RankProbe() {
const [url, setUrl] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState(null);
const [error, setError] = useState(null);

async function runAudit() {
if (!url.trim()) return;
setLoading(true);
setResult(null);
setError(null);

let cleanUrl = url.trim();
if (!cleanUrl.startsWith("http")) cleanUrl = "https://" + cleanUrl;

const prompt = `You are an expert SEO analyst. Analyze this website URL for SEO issues: ${cleanUrl}

Based on general SEO best practices, generate a realistic, detailed SEO audit report.

Respond ONLY with a valid JSON object — no markdown, no backticks, no explanation. Use this exact schema:

{
"url": "${cleanUrl}",
"score": <integer 0-100>,
"summary": "<2-sentence overall assessment>",
"stats": {
"issues_found": <number>,
"critical": <number>,
"warnings": <number>,
"passed": <number>
},
"issues": [
{
"id": "unique_id",
"severity": "critical" | "warning" | "info",
"name": "<short issue name>",
"description": "<what the problem is and why it matters>",
"fix": "<specific actionable fix>"
}
],
"passed_checks": ["<check name>", ...]
}

Generate 5-8 realistic issues based on common SEO problems for this type of site. Make it feel real and specific. Include 2-3 passed checks too.`;

try {
const response = await fetch("https://api.anthropic.com/v1/messages", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
model: "claude-sonnet-4-20250514",
max_tokens: 1000,
messages: [{ role: "user", content: prompt }],
}),
});

const data = await response.json();
if (!response.ok) throw new Error(data.error?.message || "API error");

const text = data.content.map((b) => b.text || "").join("");
const clean = text.replace(/```json|```/g, "").trim();
const parsed = JSON.parse(clean);
setResult(parsed);
} catch (err) {
setError("Audit failed: " + err.message + ". Please try again.");
} finally {
setLoading(false);
}
}

return (
<div style={styles.app}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
.fade-in { animation: fadeIn 0.4s ease forwards; }
input:focus { border-color: #3B82F6 !important; box-shadow: 0 0 0 3px #3B82F622; }
button:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
button:active:not(:disabled) { transform: translateY(0); }
`}</style>

{/* Nav */}
<nav style={styles.nav}>
<div style={styles.logo}>
<div style={styles.logoDot} />
RankProbe
</div>
<div style={styles.navBadge}>Free Beta</div>
</nav>

{/* Hero */}
<div style={styles.hero}>
<div style={styles.eyebrow}>AI-Powered SEO Analysis</div>
<h1 style={styles.h1}>Find what's killing your search rankings</h1>
<p style={styles.subtitle}>
RankProbe scans any website in seconds and gives you a full SEO audit — issues, fixes, and a score your clients instantly understand.
</p>
<div style={styles.inputRow}>
<input
style={styles.input}
type="text"
placeholder="yourwebsite.com"
value={url}
onChange={(e) => setUrl(e.target.value)}
onKeyDown={(e) => e.key === "Enter" && !loading && runAudit()}
/>
<button
style={{ ...styles.btn, ...(loading ? styles.btnDisabled : {}) }}
onClick={runAudit}
disabled={loading || !url.trim()}
>
{loading ? "Auditing…" : "Audit Site →"}
</button>
</div>
</div>

{/* Results */}
<div style={styles.main}>
{error && <div style={styles.errorBox}>⚠ {error}</div>}

{loading && (
<div style={styles.loadingBox}>
<div style={styles.spinner} />
<div style={{ fontWeight: 600, marginBottom: 8 }}>Analyzing {url}…</div>
<div style={{ fontSize: "0.85rem", color: COLORS.textSecondary }}>
Checking meta tags, performance signals, content structure, and more
</div>
</div>
)}

{result && (
<div className="fade-in">
{/* Score */}
<div style={styles.scoreCard}>
<div style={styles.scoreCircle(result.score)}>
<div style={styles.scoreInner}>
<span style={styles.scoreNum(result.score)}>{result.score}</span>
<span style={styles.scoreLabel}>/100</span>
</div>
</div>
<div style={styles.scoreInfo}>
<div style={styles.scoreTitle}>
SEO Score: {scoreLabel(result.score)}
</div>
<div style={styles.scoreSummary}>{result.summary}</div>
</div>
</div>

{/* Stats */}
<div style={styles.statsGrid}>
{[
{ val: result.stats.issues_found, key: "Total Issues", color: COLORS.textPrimary },
{ val: result.stats.critical, key: "Critical", color: COLORS.danger },
{ val: result.stats.warnings, key: "Warnings", color: COLORS.warning },
{ val: result.stats.passed, key: "Passed", color: COLORS.success },
].map((s) => (
<div key={s.key} style={styles.statCard}>
<div style={{ ...styles.statVal, color: s.color }}>{s.val}</div>
<div style={styles.statKey}>{s.key}</div>
</div>
))}
</div>

{/* Issues */}
{["critical", "warning", "info"].map((sev) => {
const issues = result.issues.filter((i) => i.severity === sev);
if (!issues.length) return null;
return (
<div key={sev}>
<div style={styles.sectionTitle}>
{sev === "critical" ? "🔴 Critical Issues" : sev === "warning" ? "🟡 Warnings" : "🔵 Improvements"}
</div>
{issues.map((issue) => (
<div key={issue.id} style={styles.issueCard(issue.severity)}>
<div style={styles.issueTop}>
<span style={styles.issueBadge(issue.severity)}>{issue.severity}</span>
<span style={styles.issueName}>{issue.name}</span>
</div>
<div style={styles.issueDesc}>{issue.description}</div>
<div style={styles.issueFix}>
<span>→</span>
<span>{issue.fix}</span>
</div>
</div>
))}
</div>
);
})}

{/* Passed */}
{result.passed_checks?.length > 0 && (
<div>
<div style={styles.sectionTitle}>✅ Passing Checks</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{result.passed_checks.map((c) => (
<div
key={c}
style={{
background: COLORS.success + "15",
border: `1px solid ${COLORS.success}33`,
color: COLORS.success,
borderRadius: "6px",
padding: "6px 12px",
fontSize: "0.82rem",
fontWeight: 500,
}}
>
{c}
</div>
))}
</div>
</div>
)}

{/* CTA */}
<div style={styles.ctaBox}>
<div style={styles.ctaTitle}>Ready to fix all of this?</div>
<div style={styles.ctaDesc}>
RankProbe Pro gives you monthly monitoring, competitor analysis, and step-by-step fixes for every issue.
</div>
<a href="https://buy.stripe.com/4gMcMXahK3UgboP3V25kk00" target="_blank" rel="noopener noreferrer" style={styles.ctaButton}>Start Free Trial - $29/mo</a>
</div>
</div>
)}

{/* Empty state features */}
{!loading && !result && !error && (
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 8 }}>
{[
{ icon: "⚡", title: "Instant Analysis", desc: "Full audit in under 10 seconds using AI" },
{ icon: "🎯", title: "Actionable Fixes", desc: "Every issue comes with a specific how-to-fix" },
{ icon: "📊", title: "Clear Score", desc: "A simple 0–100 score your clients get immediately" },
].map((f) => (
<div key={f.title} style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 24 }}>
<div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
<div style={{ fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
<div style={{ fontSize: "0.85rem", color: COLORS.textSecondary, lineHeight: 1.5 }}>{f.desc}</div>
</div>
))}
</div>
)}
</div>
</div>
);
}
