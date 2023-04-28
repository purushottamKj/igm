import sequelize from "../config/dbconfig.js";
import bodyParser from "body-parser";
import IssueTable from "../models/newIssueModel.js";

export const postIssue = async (req, res) => {
  try {
    // req data form body
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
    const name = req.body.message.issue.complainant_info.person.name;
    const phone = req.body.message.issue.complainant_info.contact.phone;
    const email = req.body.message.issue.complainant_info.contact.email;
    const order_details_id = req.body.message.issue.order_details.id;
    const state = req.body.message.issue.order_details.state;
    const items_id = req.body.message.issue.order_details.items[0].id;
    const fulfillments_id =
      req.body.message.issue.order_details.fulfillments[0].id;
    const fulfillments_state =
      req.body.message.issue.order_details.fulfillments[0].state;
    const fulfillments_provider_id =
      req.body.message.issue.order_details.fulfillments.provider_id;
    const fulfillments_merchan_torder__id =
      req.body.message.issue.order_details.fulfillments.merchan_torder__id;
    const short_desc = req.body.message.issue.description.short_desc;
    const long_desc = req.body.message.issue.description.long_desc;
    const url = req.body.message.issue.description.additional_desc.url;
    const content_type =
      req.body.message.issue.description.additional_desc.content_type;
    const images = req.body.message.issue.description.images;
    const category = req.body.message.issue.category;
    const sub_category = req.body.message.issue.sub_category;
    const issue_type = req.body.message.issue.issue_type;
    const network_participant_id =
      req.body.message.issue.source.network_participant_id;
    const issue_source_type = req.body.message.issue.source.issue_source_type;
    req.body.message.issue.source.network_participant_id;
    const expected_response_time =
      req.body.message.issue.expected_response_time.duration;
    const expected_resolution_time =
      req.body.message.issue.expected_resolution_time.duration;
    const status = req.body.message.issue.status;
    const complainant_action =
      req.body.message.issue.issue_actions.complainant_actions[0]
        .complainant_action;
    const remarks =
      req.body.message.issue.issue_actions.complainant_actions[0].remarks;
    const updated_at =
      req.body.message.issue.issue_actions.complainant_actions[0].updated_at;
    const org_name =
      req.body.message.issue.issue_actions.complainant_actions[0].updated_by.org
        .name;
    const org_phone =
      req.body.message.issue.issue_actions.complainant_actions[0].updated_by
        .contact.phone;
    const org_email =
      req.body.message.issue.issue_actions.complainant_actions[0].updated_by
        .contact.email;
    const org_person_name =
      req.body.message.issue.issue_actions.complainant_actions[0].updated_by
        .person.name;
    const issue_createdAT = req.body.message.issue.created_at;
    const issue_updatedAt = req.body.message.issue.updated_at;
    // const respondent_action =
    //   req.body.message.issue.issue_actions.respondent_actions[0]
    //     .respondent_action;
    // const respondent_remarks =
    //   req.body.message.issue.issue_actions.respondent_actions[0].remarks;
    // const respondent_updated_at =
    //   req.body.message.issue.issue_actions.respondent_actions[0].updated_at;
    // const respondent_org_name =
    //   req.body.message.issue.issue_actions.respondent_actions[0].updated_by
    //     .contact.name;
    // const respondent_org_phone =
    //   req.body.message.issue.issue_actions.respondent_actions[0].updated_by;
    // const respondent_org_email =
    //   req.body.message.issue.issue_actions.respondent_actions[0].updated_by
    //     .contact.email;
    // const respondent_person_name =
    //   req.body.message.issue.issue_actions.respondent_actions[0].updated_by
    //     .person.name;
    // const cascaded_level =
    //   req.body.message.issue.issue_actions.respondent_actions[0].cascaded_level;
    // const issue_createdAT = req.body.message.issue.created_at;
    // const issue_updatedAt = req.body.message.issue.updated_at;
    // const finalized_odr_name = req.body.message.issue.finalized_odr.name;
    // const about_info = req.body.message.issue.finalized_odr.about_info;
    // const finalized_url = req.body.message.issue.finalized_odr.url;
    // const finalized_org_name =
    //   req.body.message.issue.finalized_odr.organization.org.name;
    // const finalized_org_contact_name =
    //   req.body.message.issue.finalized_odr.organization.contact.name;
    // const finalized_org_contact_phone =
    //   req.body.message.issue.finalized_odr.organization.contact.phone;
    // const finalized_org_contact_email =
    //   req.body.message.issue.finalized_odr.organization.contact.email;
    // const finalized_org_person_name =
    //   req.body.message.issue.finalized_odr.organization.person.name;
    // const finalized_org_currency =
    //   req.body.message.issue.finalized_odr.pricing_model.price.currency;
    // const finalized_org_value =
    //   req.body.message.issue.finalized_odr.pricing_model.price.value;
    // const finalized_pricing_info =
    //   req.body.message.issue.finalized_odr.pricing_model.pricing_info;
    // const rating_value =
    //   req.body.message.issue.finalized_odr.resolution_ratings.rating_value;
    // const rating = req.body.message.issue.rating;
    // const additional_info_required_short_desc =
    //   req.body.message.issue.additional_info_required[0].info_provided
    //     .description.short_desc;
    // const additional_info_required_long_desc =
    //   req.body.message.issue.additional_info_required[0].info_provided
    //     .description.long_desc;
    // const additional_info_required_images =
    //   req.body.message.issue.additional_info_required[0].info_provided
    //     .description.images;
    // const additional_info_updated_at =
    //   req.body.message.issue.additional_info_required[0].info_provided
    //     .updated_at;
    // const additional_info_required_message_id =
    //   req.body.message.issue.additional_info_required[0].info_provided
    //     .message_id;

    // console.log(additional_info_required_message_id);

    //  <<<<<<<<<<<<----------create data for issue------------>>>>>>>>>>>>>>
    const IssueData = await IssueTable.create({
      context: {
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
      },
      message: {
        issue: {
          id,
          category,
          sub_category,
          complainant_info: {
            person: {
              name,
            },
            contact: {
              phone,
              email,
            },
          },
          order_details: {
            id: order_details_id,
            state,
            items: [
              {
                id: items_id,
              },
            ],
            fulfillments: [
              {
                id: fulfillments_id,
                state: fulfillments_state,
              },
            ],
            provider_id: fulfillments_provider_id,
          },
          description: {
            short_desc,
            long_desc,
            additional_desc: {
              url,
              content_type,
            },
            images: images,
          },

          source: {
            network_participant_id,
            issue_source_type,
          },
          expected_response_time: {
            duration: expected_response_time,
          },
          expected_resolution_time: {
            duration: expected_resolution_time,
          },
          status,
          issue_type,

          issue_actions: {
            complainant_actions: [
              {
                complainant_action,
                remarks,
                updated_at,
                updated_by: {
                  org: {
                    name: org_name,
                  },
                  contact: {
                    phone: org_phone,
                    email: org_email,
                  },
                  person: {
                    name: org_person_name,
                  },
                },
              },
            ],
          },
          created_at: issue_createdAT,
          updated_at: issue_updatedAt,
        },
      },
      status,
      issue_id: id,
    });
    res.status(200).json({ message: "success", data: IssueData });
  } catch (e) {
    console.log(e);
  }
};

// <<<<<<<<<<------------------get all issue data------------------>>>>>>>>>>>>>>>>
export const getIssue = async (req, res) => {
  try {
    const data = await IssueTable.findAll({
      attributes: ["context", "message"],
    });
    res.status(200).json({ message: "success", data: data });
  } catch (err) {
    console.log(err);
  }
};
export const getById = async (req, res) => {
  try {
    const issue_id = req.params.issue_id;
    const data = await IssueTable.findAll({
      attributes: ["context", "message"],
      where: { issue_id },
    });
    res.status(200).json({ message: "success", data: data });
  } catch (err) {
    console.log(err);
  }
};
