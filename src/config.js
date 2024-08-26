// config.js
const siteInfo = {
  // General Info
  company_name: "ARIZONA INTERIOR CONSTRUCTION",
  phone: "602-509-1242", // either no format or dashed format
  email: "arizonainteriorconstruction@gmail.com", // by default is used as recipient email
  address: "Litchfield Park, AZ, United States, Arizona",

  // Email Related
  site_key: "6Lc23x0UAAAAACGIT_C0_gyWO3bkj6Q5n-f_pqbe",
  secret_key: "6Lc23x0UAAAAAEhw1XBprAmlFaRVmS7-PZBmVwV5",
  email_from: "mailer@domain.com",
  email_from_name: "Company Name", // by default is the same as company name
  email_bcc: "", // accepts multiple emails. Comma separated eg: email1@domain.com,email2@domain.com
  email_cc: "", // accepts multiple emails. Comma separated eg: email1@domain.com,email2@domain.com

  // Social Media Links
  fb_link: "https://facebook.com",
  tt_link: "https://twitter.com",
  gp_link: "https://plus.google.com/",
  ig_link: "https://instagram.com",
  yt_link: "https://youtube.com",
  li_link: "https://www.linkedin.com/",
  tb_link: "https://www.tumblr.com",
  yp_link: "https://yelp.com",

  // SEO
  ga_tracking_id: "",

  // Privacy Policy Link
  policy_link: "", // change the value to privacy-policy for Privacy Policy Page

  // Cookie
  cookie: true, // false to disable cookie
  save_form: false, // save inquiry form on excel

  // Suspension
  suspended: false,
};

// Exporting the configuration object
export default siteInfo;
