import { Router } from "express";
import {
  getIssue,
  postIssue,
  getById,
} from "../controllers/issuecontrollers.js";
import { onIssue } from "../controllers/onIssueControllers.js";
import { on_issue_status } from "../controllers/on_issue_status.js";
const router = Router();

// Post issue Data
router.post("/issue", (req, res) => {
  postIssue(req, res);
});

// get issue data
router.get("/issuedata", (req, res) => {
  getIssue(req, res);
});

// get by id issue data
router.get("/getById/:issue_id", (req, res) => {
  getById(req, res);
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
