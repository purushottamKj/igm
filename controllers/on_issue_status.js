import sequelize from "../config/dbconfig.js";
import bodyParser from "body-parser";
import on_issueTable from "../models/on_issueModel.js";
import moment from "moment/moment.js";

export const on_issue_status = async (req, res) => {
  try {
    const issue_id = req.body.message.id;

    const status = await on_issueTable.findAll({
      attributes: ["context", "message"],
      where: { issue_id },
    });

    // find data form array of object================================>>>>>>>>>>>>>>>>>
    const context = status.map((obj) => obj.context);
    const domain = context[0].domain;
    const country = context[0].country;
    const city = context[0].city;
    const action = context[0].action;
    const core_version = context[0].core_version;
    const bap_uri = context[0].bap_uri;
    const bap_id = context[0].bap_id;
    const transaction_id = context[0].transaction_id;
    const message_id = context[0].message_id;
    const timestamp = context[0].timestamp;
    const bpp_id = context[0].bpp_id;
    const bpp_uri = context[0].bpp_uri;

    // find data form array of object====================================>>>>>>>>>>>>>>>>>>>>
    const message = status.map((obje) => obje.message);
    const id = message[0].issue.id;
    const respondent_action =
      message[0].issue.issue_actions.respondent_actions[0].respondent_action;
    const remarks =
      message[0].issue.issue_actions.respondent_actions[0].remarks;
    const updated_at_action =
      message[0].issue.issue_actions.respondent_actions[0].updated_at;
    const cascaded_level =
      message[0].issue.issue_actions.respondent_actions[0].cascaded_level;
    const org_name =
      message[0].issue.issue_actions.respondent_actions[0].updated_by.org.name;
    const phone =
      message[0].issue.issue_actions.respondent_actions[0].updated_by.contact
        .phone;
    const email =
      message[0].issue.issue_actions.respondent_actions[0].updated_by.contact
        .email;
    const person =
      message[0].issue.issue_actions.respondent_actions[0].updated_by.person
        .name;

    const created_at = message[0].issue.created_at;
    const updated_at = message[0].issue.updated_at;

    // create json for response On_issue_status=============================>>>>>>>>>>>>>>>>>>>>>>>>>
    const responseData = {
      context: {
        domain,
        country,
        city,
        action: "on_issue_status",
        core_version,
        bap_id,
        bap_uri,
        transaction_id,
        message_id,
        timestamp: moment().format("YYYY-MM-DD hh:mm:ss"),
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
                remarks,
                updated_at: updated_at_action,
                updated_by: {
                  org: {
                    name: org_name,
                  },
                  contact: {
                    phone,
                    email,
                  },
                  person: {
                    name: person,
                  },
                },
                cascaded_level,
              },
            ],
          },
          created_at,
          updated_at,
        },
      },
    };
    const jsonContent = JSON.stringify(responseData);
    return res.end(jsonContent);
  } catch (err) {
    console.log(err);
  }
};
