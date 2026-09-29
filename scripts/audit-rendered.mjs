const urls = [
  "http://localhost:3000",
  "http://localhost:3000/work/sbom-visibility",
  "http://localhost:3000/work/researchplughub",
  "http://localhost:3000/work/fraud-detection-ml",
  "http://localhost:3000/work/cloud-devsecops-pipeline",
  "http://localhost:3000/robots.txt",
  "http://localhost:3000/sitemap.xml",
];

async function runAudit() {
  console.log("\n=======================================================");
  console.log("       RENDERED PAGE & ZERO-TODO PRODUCTION AUDIT      ");
  console.log("=======================================================\n");

  let allPassed = true;

  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const status = res.status;

      if (status !== 200) {
        console.error(`❌ [FAIL] ${url} returned HTTP ${status}`);
        allPassed = false;
        continue;
      }

      // Check if rendered HTML contains TODO
      const hasTodo = /\bTODO\b/i.test(text);

      if (hasTodo) {
        console.error(`❌ [FAIL] ${url} contains rendered TODO text!`);
        allPassed = false;
      } else {
        console.log(`✓ [PASS] ${url} (HTTP ${status}, 0 rendered TODOs, length: ${text.length} bytes)`);
      }
    } catch (err) {
      console.error(`❌ [ERROR] Could not fetch ${url}:`, err.message);
      allPassed = false;
    }
  }

  console.log("\n-------------------------------------------------------");
  if (allPassed) {
    console.log("🎉 AUDIT PASSED: All routes returned HTTP 200 with ZERO TODOs in rendered output!\n");
  } else {
    console.error("⚠️ AUDIT FAILED: Please inspect errors above.\n");
    process.exit(1);
  }
}

runAudit();
