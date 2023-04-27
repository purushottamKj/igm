import sequelize from "../config/dbconfig.js";
import bodyParser from "body-parser";
import on_issueTable from "../models/on_issueModel.js";

export const onIssue = async (req, res) => {
  const {
    domain,
    country,
    city,
    action,
    core_version,
    bap_id,
    bap_uri,
    bpp_id,
    bpp_uri,
    transaction_id,
    message_id,
    timestamp,
    ttl,
  } = req.body.context;
  const id = req.body.message.issue.id;
  const respondent_action =
    req.body.message.issue.issue_actions.respondent_actions[0]
      .respondent_action;
  const respondent_remarks =
    req.body.message.issue.issue_actions.respondent_actions[0].remarks;
  const respondent_updated_at =
    req.body.message.issue.issue_actions.respondent_actions[0].updated_at;
  const respondent_org_name =
    req.body.message.issue.issue_actions.respondent_actions[0].updated_by.org
      .name;
  const respondent_org_phone =
    req.body.message.issue.issue_actions.respondent_actions[0].updated_by
      .contact.phone;
  const respondent_org_email =
    req.body.message.issue.issue_actions.respondent_actions[0].updated_by
      .contact.email;
  const respondent_person_name =
    req.body.message.issue.issue_actions.respondent_actions[0].updated_by.person
      .name;
  const cascaded_level =
    req.body.message.issue.issue_actions.respondent_actions[0].cascaded_level;
  const created_at = req.body.message.issue.created_at;
  const updated_at = req.body.message.issue.updated_at;

  const IssueData = await on_issueTable.create({
    context: {
      domain,
      country,
      city,
      action,
      core_version,
      bap_id,
      bap_uri,
      transaction_id,
      message_id,
      timestamp,
      bpp_id,
      bpp_uri,
    },
    message: {
      issue: {
        id,
        issue_actions: {
          respondent_actions: [
            {
              respondent_action,
              remarks: respondent_remarks,
              updated_at: respondent_updated_at,
              updated_by: {
                org: {
                  name: respondent_org_name,
                },
                contact: {
                  phone: respondent_org_phone,
                  email: respondent_org_email,
                },
                person: {
                  name: respondent_person_name,
                },
              },
              cascaded_level: cascaded_level,
            },
          ],
        },
        created_at,
        updated_at,
      },
    },
    status: "created",
    issue_id: id,
  });
  console.log(respondent_action);
  const responseData = {
    context: {
      domain,
      country,
      city,
      action,
      core_version,
      bap_id,
      bap_uri,
      transaction_id,
      message_id,
      timestamp,
      bpp_id,
      bpp_uri,
    },
    message: {
      issue: {
        id,
        issue_actions: {
          respondent_actions: [
            {
              respondent_action,
              remarks: respondent_remarks,
              updated_at: respondent_updated_at,
              updated_by: {
                org: {
                  name: respondent_org_name,
                },
                contact: {
                  phone: respondent_org_phone,
                  email: respondent_org_email,
                },
                person: {
                  name: respondent_person_name,
                },
              },
              cascaded_level: cascaded_level,
            },
          ],
        },
        created_at: created_at,
        updated_at: updated_at,
      },
    },
  };

  const jsonContent = JSON.stringify(responseData);
  return res.end(jsonContent);
};
