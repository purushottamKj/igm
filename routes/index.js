import { Router } from "express";
import { getIssue, postIssue } from "../controllers/issuecontrollers.js";
import { onIssue } from "../controllers/onIssueControllers.js";
import { on_issue_status } from "../controllers/on_issue_status.js";
// import cors from "cors";
const router = Router();
// app.use(cors());

// Post issue Data
router.post("/issue", (req, res) => {
  postIssue(req, res);
});

// get issue data
router.get("/issuedata", (req, res) => {
  
  getIssue(req, res);
});

//on_issue data post
router.post("/on_issue", (req, res) => {
  onIssue(req, res);
});

//on_issue status
router.get("/on_issue_status", (req, res) => {
  on_issue_status(req, res);
});
export default router;
