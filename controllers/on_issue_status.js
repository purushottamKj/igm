import sequelize from "../config/dbconfig.js";
import bodyParser from "body-parser";
import on_issueTable from "../models/on_issueModel.js";
import moment from "moment/moment.js";
import { response } from "express";

export const on_issue_status = async (req, res) => {
  const issue_id = req.body.message.id;
  console.log(issue_id);
  console.log(issue_id);
  const status = await on_issueTable.findAll({
    attributes: ["context", "message"],
    where: { issue_id },
  });
  

  //   const context = JSON.parse(status.context);
  //   const domain = context.domain;
  //   const country = context.country;
  //   const city = context.city;
  //   const action = context.action;
  //   const core_version = context.core_version;
  //   const bap_uri = context.bap_uri;
  //   const bap_id = context.bap_id;
  //   const transaction_id = context.transaction_id;
  //   const message_id = context.message_id;
  //   const timestamp = context.timestamp;
  //   const bpp_id = context.bpp_id;
  //   const bpp_uri = context.bpp_uri;
  //   const message = JSON.parse(status.message);
  //   const id = message.issue.id;
  //   const respondent_action =
  //     message.issue.issue_actions.respondent_actions[0].respondent_action;
  //   const remarks = message.issue.issue_actions.respondent_actions[0].remarks;
  //   const updated_at_action =
  //     message.issue.issue_actions.respondent_actions[0].updated_at;
  //   const cascaded_level =
  //     message.issue.issue_actions.respondent_actions[0].cascaded_level;
  //   const org_name =
  //     message.issue.issue_actions.respondent_actions[0].updated_by.org.name;
  //   const phone =
  //     message.issue.issue_actions.respondent_actions[0].updated_by.contact.phone;
  //   const email =
  //     message.issue.issue_actions.respondent_actions[0].updated_by.contact.email;
  //   const person =
  //     message.issue.issue_actions.respondent_actions[0].updated_by.person.name;

  //   const created_at = message.issue.created_at;
  //   const updated_at = message.issue.updated_at;

  //   const responseData = {
  //     context: {
  //       domain,
  //       country,
  //       city,
  //       action: "on_issue_status",
  //       core_version,
  //       bap_id,
  //       bap_uri,
  //       transaction_id,
  //       message_id,
  //       timestamp: moment().format("YYYY-MM-DD hh:mm:ss"),
  //       bpp_id,
  //       bpp_uri,
  //     },
  //     message: {
  //       issue: {
  //         id,
  //         issue_actions: {
  //           respondent_actions: [
  //             {
  //               respondent_action,
  //               remarks,
  //               updated_at: updated_at_action,
  //               updated_by: {
  //                 org: {
  //                   name: org_name,
  //                 },
  //                 contact: {
  //                   phone,
  //                   email,
  //                 },
  //                 person: {
  //                   name: person,
  //                 },
  //               },
  //               cascaded_level,
  //             },
  //           ],
  //         },
  //         created_at,
  //         updated_at,
  //       },
  //     },
  //   };
  //   const jsonContent = JSON.stringify(responseData);
  //   return res.end(jsonContent);
  console.log(status);
};
