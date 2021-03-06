module.exports = ({
  contact,
  appliances,
  bathone,
  bathtwo,
  bedone,
  bedtwo,
  bedthree,
  dining,
  kitchen,
  living,
  other,
  ratings,
  comments,
  keys,
  files,
  abovethreestars,
  belowthreestars,
}) => {
  const aboveThreeStarsOrBelow = belowthreestars.length
    ? `<div><h5>Customer review:</h5>${belowthreestars}</div>`
    : `<div><a href="${abovethreestars}">Review Us!</div>`;
  const frontDoorKeys = keys.fdkeys ? keys.fdkeys : "0";
  const deadBoltKeys = keys.dbkeys ? keys.dbkeys : "0";
  const mailboxKeys = keys.mbkeys ? keys.mbkeys : "0";
  const commonKeys = keys.cakeys ? keys.cakeys : "0";
  const remoteKeys = keys.rkeys ? keys.rkeys : "0";
  const otherObjectKeys = keys.other ? keys.other : "0";
  const otherObjects = keys.othernames ? keys.othernames : "0";
  const starOne = ratings.one ? ratings.one : "";
  const starTwo = ratings.two ? ratings.two : "";
  const starThree = ratings.three ? ratings.three : "";
  const starFour = ratings.four ? ratings.four : "";
  const starFive = ratings.five ? ratings.five : "";
  const starSix = ratings.six ? ratings.six : "";
  const kitchenComments = comments.kitchen ? comments.kitchen : "";
  const kitchenKeys = kitchen ? Object.keys(kitchen) : null;
  const kitchenValues = kitchen ? Object.values(kitchen) : null;
  const kitchenFiles = files.kitchen
    ? files.kitchen.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const kitchenKeysValues = kitchenKeys
    ? kitchenKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${kitchenValues[index]}</td>
    </tr>
  `;
      })
    : "N/A";
  const applianceComments = comments.appliances ? comments.appliances : "";
  const applianceFiles = files.appliances
    ? files.appliances.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const applianceKeys = appliances ? Object.keys(appliances) : null;
  const applianceValues = appliances ? Object.values(appliances) : null;
  const applianceKeysValues = applianceKeys
    ? applianceKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${applianceValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const bathoneComments = comments.bathone ? comments.bathone : "";
  const bathoneFiles = files.bathone
    ? files.bathone.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const bathoneKeys = bathone ? Object.keys(bathone) : null;
  const bathoneValues = bathone ? Object.values(bathone) : null;
  const bathoneKeysValues = bathoneKeys
    ? bathoneKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${bathoneValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const bathtwoComments = comments.bathtwo ? comments.bathtwo : "";
  const bathtwoFiles = files.bathtwo
    ? files.bathtwo.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const bathtwoKeys = bathtwo ? Object.keys(bathtwo) : null;
  const bathtwoValues = bathtwo ? Object.values(bathtwo) : null;
  const bathtwoKeysValues = bathtwoKeys
    ? bathtwoKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${bathtwoValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const bedoneComments = comments.bedone ? comments.bedone : "";
  const bedoneFiles = files.bedone
    ? files.bedone.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const bedoneKeys = bedone ? Object.keys(bedone) : null;
  const bedoneValues = bedone ? Object.values(bedone) : null;
  const bedoneKeysValues = bedoneKeys
    ? bedoneKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${bedoneValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const bedtwoComments = comments.bedtwo ? comments.bedtwo : "";
  const bedtwoFiles = files.bedtwo
    ? files.bedtwo.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const bedtwoKeys = bedtwo ? Object.keys(bedtwo) : null;
  const bedtwoValues = bedtwo ? Object.values(bedtwo) : null;
  const bedtwoKeysValues = bedtwoKeys
    ? bedtwoKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${bedtwoValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const bedthreeComments = comments.bedthree ? comments.bedthree : "";
  const bedthreeFiles = files.bedthree
    ? files.bedthree.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const bedthreeKeys = bedthree ? Object.keys(bedthree) : null;
  const bedthreeValues = bedthree ? Object.values(bedthree) : null;
  const bedthreeKeysValues = bedthreeKeys
    ? bedthreeKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${bedthreeValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const diningComments = comments.dining ? comments.dining : "";
  const diningFiles = files.dining
    ? files.dining.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const diningKeys = dining ? Object.keys(dining) : null;
  const diningValues = dining ? Object.values(dining) : null;
  const diningKeysValues = diningKeys
    ? diningKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${diningValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const livingComments = comments.living ? comments.living : "";
  const livingFiles = files.living
    ? files.living.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const livingKeys = living ? Object.keys(living) : null;
  const livingValues = living ? Object.values(living) : null;
  const livingKeysValues = livingKeys
    ? livingKeys.map((key, index) => {
        return `
    <tr class="item">
      <td class="keysValues">${key}: ${livingValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const otherComments = comments.other ? comments.other : "";
  const otherFiles = files.other
    ? files.other.map((image, index) => {
        return `<img style="height: 100px;" src="${image}" alt="${index}" />`;
      })
    : "";
  const otherKeys = other ? Object.keys(other) : null;
  const otherValues = other ? Object.values(other) : null;
  const otherKeysValues = otherKeys
    ? otherKeys.map((key, index) => {
        return `
    <tr>
      <td class="keysValues">${key}: ${otherValues[index]}</td>
    </tr>`;
      })
    : "N/A";
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html lang="en">
  <!--<!
  [endif]--><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width" />
    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .wrapper {
          min-width: 600px !important;
        }
        .wrapper h1 {
        }
        .wrapper h1 {
          font-size: 64px !important;
          line-height: 63px !important;
        }
        .wrapper h2 {
        }
        .wrapper h2 {
          font-size: 30px !important;
          line-height: 38px !important;
        }
        .wrapper h3 {
        }
        .wrapper h3 {
          font-size: 22px !important;
          line-height: 31px !important;
        }
        .column {
        }
        .wrapper .size-8 {
          font-size: 8px !important;
          line-height: 14px !important;
        }
        .wrapper .size-9 {
          font-size: 9px !important;
          line-height: 16px !important;
        }
        .wrapper .size-10 {
          font-size: 10px !important;
          line-height: 18px !important;
        }
        .wrapper .size-11 {
          font-size: 11px !important;
          line-height: 19px !important;
        }
        .wrapper .size-12 {
          font-size: 12px !important;
          line-height: 19px !important;
        }
        .wrapper .size-13 {
          font-size: 13px !important;
          line-height: 21px !important;
        }
        .wrapper .size-14 {
          font-size: 14px !important;
          line-height: 21px !important;
        }
        .wrapper .size-15 {
          font-size: 15px !important;
          line-height: 23px !important;
        }
        .wrapper .size-16 {
          font-size: 16px !important;
          line-height: 24px !important;
        }
        .wrapper .size-17 {
          font-size: 17px !important;
          line-height: 26px !important;
        }
        .wrapper .size-18 {
          font-size: 18px !important;
          line-height: 26px !important;
        }
        .wrapper .size-20 {
          font-size: 20px !important;
          line-height: 28px !important;
        }
        .wrapper .size-22 {
          font-size: 22px !important;
          line-height: 31px !important;
        }
        .wrapper .size-24 {
          font-size: 24px !important;
          line-height: 32px !important;
        }
        .wrapper .size-26 {
          font-size: 26px !important;
          line-height: 34px !important;
        }
        .wrapper .size-28 {
          font-size: 28px !important;
          line-height: 36px !important;
        }
        .wrapper .size-30 {
          font-size: 30px !important;
          line-height: 38px !important;
        }
        .wrapper .size-32 {
          font-size: 32px !important;
          line-height: 40px !important;
        }
        .wrapper .size-34 {
          font-size: 34px !important;
          line-height: 43px !important;
        }
        .wrapper .size-36 {
          font-size: 36px !important;
          line-height: 43px !important;
        }
        .wrapper .size-40 {
          font-size: 40px !important;
          line-height: 47px !important;
        }
        .wrapper .size-44 {
          font-size: 44px !important;
          line-height: 50px !important;
        }
        .wrapper .size-48 {
          font-size: 48px !important;
          line-height: 54px !important;
        }
        .wrapper .size-56 {
          font-size: 56px !important;
          line-height: 60px !important;
        }
        .wrapper .size-64 {
          font-size: 64px !important;
          line-height: 63px !important;
        }
      }
    </style>
    <meta name="x-apple-disable-message-reformatting" />
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      table {
        border-collapse: collapse;
        table-layout: fixed;
      }
      * {
        line-height: inherit;
      }
      [x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      }
      .wrapper .footer__share-button a:hover,
      .wrapper .footer__share-button a:focus {
        color: black !important;
      }
      .btn a:hover,
      .btn a:focus,
      .footer__share-button a:hover,
      .footer__share-button a:focus,
      .email-footer__links a:hover,
      .email-footer__links a:focus {
        opacity: 0.8;
      }
      .preheader,
      .header,
      .layout,
      .column {
        transition: width 0.25s ease-in-out, max-width 0.25s ease-in-out;
      }
      .preheader td {
        padding-bottom: 8px;
      }
      .layout,
      div.header {
        max-width: 400px !important;
        -fallback-width: 95% !important;
        width: calc(100% - 20px) !important;
      }
      div.preheader {
        max-width: 360px !important;
        -fallback-width: 90% !important;
        width: calc(100% - 60px) !important;
      }
      .snippet,
      .webversion {
        float: none !important;
      }
      .stack .column {
        max-width: 400px !important;
        width: 100% !important;
      }
      .fixed-width.has-border {
        max-width: 402px !important;
      }
      .fixed-width.has-border .layout__inner {
        box-sizing: border-box;
      }
      .snippet,
      .webversion {
        width: 50% !important;
      }
      .ie .btn {
        width: 100%;
      }
      .ie .stack .column,
      .ie .stack .gutter {
        display: table-cell;
        float: none !important;
      }
      .ie div.preheader,
      .ie .email-footer {
        max-width: 560px !important;
        width: 560px !important;
      }
      .ie .snippet,
      .ie .webversion {
        width: 280px !important;
      }
      .ie div.header,
      .ie .layout {
        max-width: 600px !important;
        width: 600px !important;
      }
      .ie .two-col .column {
        max-width: 300px !important;
        width: 300px !important;
      }
      .ie .three-col .column,
      .ie .narrow {
        max-width: 200px !important;
        width: 200px !important;
      }
      .ie .wide {
        width: 400px !important;
      }
      .ie .stack.fixed-width.has-border,
      .ie .stack.has-gutter.has-border {
        max-width: 602px !important;
        width: 602px !important;
      }
      .ie .stack.two-col.has-gutter .column {
        max-width: 290px !important;
        width: 290px !important;
      }
      .ie .stack.three-col.has-gutter .column,
      .ie .stack.has-gutter .narrow {
        max-width: 188px !important;
        width: 188px !important;
      }
      .ie .stack.has-gutter .wide {
        max-width: 394px !important;
        width: 394px !important;
      }
      .ie .stack.two-col.has-gutter.has-border .column {
        max-width: 292px !important;
        width: 292px !important;
      }
      .ie .stack.three-col.has-gutter.has-border .column,
      .ie .stack.has-gutter.has-border .narrow {
        max-width: 190px !important;
        width: 190px !important;
      }
      .ie .stack.has-gutter.has-border .wide {
        max-width: 396px !important;
        width: 396px !important;
      }
      .ie .fixed-width .layout__inner {
        border-left: 0 none white !important;
        border-right: 0 none white !important;
      }
      .ie .layout__edges {
        display: none;
      }
      .mso .layout__edges {
        font-size: 0;
      }
      .layout-fixed-width,
      .mso .layout-full-width {
        background-color: #ffffff;
      }
      @media only screen and (min-width: 620px) {
        .column,
        .gutter {
          display: table-cell;
          float: none !important;
          vertical-align: top;
        }
        div.preheader,
        .email-footer {
          max-width: 560px !important;
          width: 560px !important;
        }
        .snippet,
        .webversion {
          width: 280px !important;
        }
        div.header,
        .layout,
        .one-col .column {
          max-width: 600px !important;
          width: 600px !important;
        }
        .fixed-width.has-border,
        .fixed-width.x_has-border,
        .has-gutter.has-border,
        .has-gutter.x_has-border {
          max-width: 602px !important;
          width: 602px !important;
        }
        .two-col .column {
          max-width: 300px !important;
          width: 300px !important;
        }
        .three-col .column,
        .column.narrow,
        .column.x_narrow {
          max-width: 200px !important;
          width: 200px !important;
        }
        .column.wide,
        .column.x_wide {
          width: 400px !important;
        }
        .two-col.has-gutter .column,
        .two-col.x_has-gutter .column {
          max-width: 290px !important;
          width: 290px !important;
        }
        .three-col.has-gutter .column,
        .three-col.x_has-gutter .column,
        .has-gutter .narrow {
          max-width: 188px !important;
          width: 188px !important;
        }
        .has-gutter .wide {
          max-width: 394px !important;
          width: 394px !important;
        }
        .two-col.has-gutter.has-border .column,
        .two-col.x_has-gutter.x_has-border .column {
          max-width: 292px !important;
          width: 292px !important;
        }
        .three-col.has-gutter.has-border .column,
        .three-col.x_has-gutter.x_has-border .column,
        .has-gutter.has-border .narrow,
        .has-gutter.x_has-border .narrow {
          max-width: 190px !important;
          width: 190px !important;
        }
        .has-gutter.has-border .wide,
        .has-gutter.x_has-border .wide {
          max-width: 396px !important;
          width: 396px !important;
        }
      }
      @supports (display: flex) {
        @media only screen and (min-width: 620px) {
          .fixed-width.has-border .layout__inner {
            display: flex !important;
          }
        }
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (min--moz-device-pixel-ratio: 2),
        only screen and (-o-min-device-pixel-ratio: 2/1),
        only screen and (min-device-pixel-ratio: 2),
        only screen and (min-resolution: 192dpi),
        only screen and (min-resolution: 2dppx) {
        .fblike {
          background-image: url(https://i7.createsend1.com/static/eb/master/13-the-blueprint-3/images/fblike@2x.png) !important;
        }
        .tweet {
          background-image: url(https://i8.createsend1.com/static/eb/master/13-the-blueprint-3/images/tweet@2x.png) !important;
        }
        .linkedinshare {
          background-image: url(https://i9.createsend1.com/static/eb/master/13-the-blueprint-3/images/lishare@2x.png) !important;
        }
        .forwardtoafriend {
          background-image: url(https://i10.createsend1.com/static/eb/master/13-the-blueprint-3/images/forward@2x.png) !important;
        }
      }
      @media (max-width: 321px) {
        .fixed-width.has-border .layout__inner {
          border-width: 1px 0 !important;
        }
        .layout,
        .stack .column {
          min-width: 320px !important;
          width: 320px !important;
        }
        .border {
          display: none;
        }
        .has-gutter .border {
          display: table-cell;
        }
      }
      .mso div {
        border: 0 none white !important;
      }
      .mso .w560 .divider {
        margin-left: 260px !important;
        margin-right: 260px !important;
      }
      .mso .w360 .divider {
        margin-left: 160px !important;
        margin-right: 160px !important;
      }
      .mso .w260 .divider {
        margin-left: 110px !important;
        margin-right: 110px !important;
      }
      .mso .w160 .divider {
        margin-left: 60px !important;
        margin-right: 60px !important;
      }
      .mso .w354 .divider {
        margin-left: 157px !important;
        margin-right: 157px !important;
      }
      .mso .w250 .divider {
        margin-left: 105px !important;
        margin-right: 105px !important;
      }
      .mso .w148 .divider {
        margin-left: 54px !important;
        margin-right: 54px !important;
      }
      .mso .size-8,
      .ie .size-8 {
        font-size: 8px !important;
        line-height: 14px !important;
      }
      .mso .size-9,
      .ie .size-9 {
        font-size: 9px !important;
        line-height: 16px !important;
      }
      .mso .size-10,
      .ie .size-10 {
        font-size: 10px !important;
        line-height: 18px !important;
      }
      .mso .size-11,
      .ie .size-11 {
        font-size: 11px !important;
        line-height: 19px !important;
      }
      .mso .size-12,
      .ie .size-12 {
        font-size: 12px !important;
        line-height: 19px !important;
      }
      .mso .size-13,
      .ie .size-13 {
        font-size: 13px !important;
        line-height: 21px !important;
      }
      .mso .size-14,
      .ie .size-14 {
        font-size: 14px !important;
        line-height: 21px !important;
      }
      .mso .size-15,
      .ie .size-15 {
        font-size: 15px !important;
        line-height: 23px !important;
      }
      .mso .size-16,
      .ie .size-16 {
        font-size: 16px !important;
        line-height: 24px !important;
      }
      .mso .size-17,
      .ie .size-17 {
        font-size: 17px !important;
        line-height: 26px !important;
      }
      .mso .size-18,
      .ie .size-18 {
        font-size: 18px !important;
        line-height: 26px !important;
      }
      .mso .size-20,
      .ie .size-20 {
        font-size: 20px !important;
        line-height: 28px !important;
      }
      .mso .size-22,
      .ie .size-22 {
        font-size: 22px !important;
        line-height: 31px !important;
      }
      .mso .size-24,
      .ie .size-24 {
        font-size: 24px !important;
        line-height: 32px !important;
      }
      .mso .size-26,
      .ie .size-26 {
        font-size: 26px !important;
        line-height: 34px !important;
      }
      .mso .size-28,
      .ie .size-28 {
        font-size: 28px !important;
        line-height: 36px !important;
      }
      .mso .size-30,
      .ie .size-30 {
        font-size: 30px !important;
        line-height: 38px !important;
      }
      .mso .size-32,
      .ie .size-32 {
        font-size: 32px !important;
        line-height: 40px !important;
      }
      .mso .size-34,
      .ie .size-34 {
        font-size: 34px !important;
        line-height: 43px !important;
      }
      .mso .size-36,
      .ie .size-36 {
        font-size: 36px !important;
        line-height: 43px !important;
      }
      .mso .size-40,
      .ie .size-40 {
        font-size: 40px !important;
        line-height: 47px !important;
      }
      .mso .size-44,
      .ie .size-44 {
        font-size: 44px !important;
        line-height: 50px !important;
      }
      .mso .size-48,
      .ie .size-48 {
        font-size: 48px !important;
        line-height: 54px !important;
      }
      .mso .size-56,
      .ie .size-56 {
        font-size: 56px !important;
        line-height: 60px !important;
      }
      .mso .size-64,
      .ie .size-64 {
        font-size: 64px !important;
        line-height: 63px !important;
      }
    </style>
  
    <style type="text/css">
      body {
        background-color: white;
      }
      .logo a:hover,
      .logo a:focus {
        color: black !important;
      }
      .mso .layout-has-border {
        border-top: 1px solid #76808a;
        border-bottom: 1px solid #76808a;
      }
      .mso .layout-has-bottom-border {
        border-bottom: 1px solid #76808a;
      }
      .mso .border,
      .ie .border {
        background-color: white;
      }
      .mso h1,
      .ie h1 {
      }
      .mso h1,
      .ie h1 {
        font-size: 64px !important;
        line-height: 63px !important;
      }
      .mso h2,
      .ie h2 {
      }
      .mso h2,
      .ie h2 {
        font-size: 30px !important;
        line-height: 38px !important;
      }
      .mso h3,
      .ie h3 {
      }
      .mso h3,
      .ie h3 {
        font-size: 22px !important;
        line-height: 31px !important;
      }
      .mso .layout__inner,
      .ie .layout__inner {
      }
      .mso .footer__share-button p {
      }
      .mso .footer__share-button p {
        font-family: sans-serif;
      }
    </style>
    <meta name="robots" content="noindex,nofollow" />
    <meta property="og:title" content="My First Campaign" />
  </head>
  <!--[if mso]>
    <body class="mso">
  <![endif]-->
  <!--[if !mso]><!-->
  <body
    class="no-padding"
    style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%;"
  >
    <!--<![endif]-->
  
    <tr>
      <td>
        <div role="banner">
          <div
            class="preheader"
            style="
              margin: 0 auto;
              max-width: 560px;
              min-width: 280px;
              width: 280px;
              width: calc(28000% - 167440px);
            "
          >
            <div style="border-collapse: collapse; display: table; width: 100%;">
              <!--[if (mso)|(IE)]><table align="center" class="preheader" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="width: 280px" valign="top"><![endif]-->
              <div
                class="snippet"
                style="
                  display: table-cell;
                  float: left;
                  font-size: 12px;
                  line-height: 19px;
                  max-width: 280px;
                  min-width: 140px;
                  width: 140px;
                  width: calc(14000% - 78120px);
                  padding: 10px 0 5px 0;
                  color: #adb3b9;
                  font-family: sans-serif;
                "
              ></div>
              <!--[if (mso)|(IE)]></td><td style="width: 280px" valign="top"><![endif]-->
              <div
                class="webversion"
                style="
                  display: table-cell;
                  float: left;
                  font-size: 12px;
                  line-height: 19px;
                  max-width: 280px;
                  min-width: 139px;
                  width: 139px;
                  width: calc(14100% - 78680px);
                  padding: 10px 0 5px 0;
                  text-align: right;
                  color: #adb3b9;
                  font-family: sans-serif;
                "
              ></div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div
            class="header"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
            "
            id="emb-email-header-container"
          >
            <!--[if (mso)|(IE)]><table align="center" class="header" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="width: 600px"><![endif]-->
            <div
              class="logo emb-logo-margin-box"
              style="
                font-size: 26px;
                line-height: 32px;
                margin-top: 0px;
                margin-bottom: 19px;
                color: black;
                font-family: Times, Times New Roman, serif;
                margin-left: 20px;
                margin-right: 20px;
              "
              align="center"
            >
              <div
                class="logo-center"
                style="font-size: 26px !important; line-height: 32px !important;"
                align="center"
                id="emb-email-header"
              >
                Tenant ${contact.fname} ${contact.lname}
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </div>
        </div>
        <div>
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #adb3b9;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      line-height: 20px;
                      font-size: 1px;
                    "
                  >
                    &nbsp;
                  </div>
                </div>
  
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p
                      style="
                        margin-top: 0;
                        margin-bottom: 20px;
                        text-align: center;
                      "
                    >
                      <span style="color: #000000;"
                        >Date: ${
                          today.getMonth() + 1
                        }-${`${today.getDate()}-${today.getFullYear()}`}</span
                      >
                    </p>
                  </div>
                </div>
  
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 20px; margin-bottom: 0;">
                      <span style="color: #000000;"
                        >${contact.address} ${contact.cunit} ${contact.city}, ${
    contact.state
  } ${contact.zip}<br />${contact.email}<br />${contact.phone}<br />Unit:
                        ${contact.nunit}<br
                      /></span>
                    </p>
                  </div>
                </div>
  
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      line-height: 45px;
                      font-size: 1px;
                    "
                  >
                    &nbsp;
                  </div>
                </div>
  
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p
                      class="size-16"
                      style="
                        margin-top: 0;
                        margin-bottom: 0;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: left;
                      "
                      lang="x-size-16"
                    ></p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Kitchen</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #ffffff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${kitchenKeysValues}
                    </p>
                    ${kitchenFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${kitchenComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Appliances</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${applianceKeysValues}
                    </p>
                    ${applianceFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${applianceComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Bathroom #1</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bathoneKeysValues}
                    </p>
                    ${bathoneFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bathoneComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Bathroom #2</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bathtwoKeysValues}
                    </p>
                    ${bathtwoFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bathtwoComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Bedroom #1</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: #white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedoneKeysValues}
                    </p>
                    ${bedoneFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedoneComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Bedroom #2</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedtwoKeysValues}
                    </p>
                    ${bedtwoFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedtwoComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Bedroom #3</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedthreeKeysValues}
                    </p>
                    ${bedthreeFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${bedthreeComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
  
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Dining</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${diningKeysValues}
                    </p>
                    ${diningFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${diningComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Living</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${livingKeysValues}
                    </p>
                    ${livingFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${livingComments}
                    </p>
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <div style="margin: 20px;">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Other</span></strong>
              </p>
            </div>
          </div>
          <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          >
            <div
              class="layout__inner"
              style="
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: white;
              "
            >
              <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #fff;"><td style="width: 600px" class="w560"><![endif]-->
              <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <div style="margin-left: 20px; margin-right: 20px;">
                  <div
                    style="
                      mso-line-height-rule: exactly;
                      mso-text-raise: 11px;
                      vertical-align: middle;
                    "
                  >
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${otherKeysValues}
                    </p>
                    ${otherFiles}
                    <p style="margin-top: 0; margin-bottom: 0;">
                      ${otherComments}
                    </p>
                  </div>
                </div>
              </div>
              <div
            style="
              mso-line-height-rule: exactly;
              line-height: 20px;
              font-size: 20px;
            "
          >
            &nbsp;
          </div>
  
          <div
            class="layout one-col fixed-width stack"
            style="
              margin: 0 auto;
              max-width: 600px;
              min-width: 320px;
              width: 320px;
              width: calc(28000% - 167400px);
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
            "
          ><p
          class="size-16"
          style="
            margin: 0 auto;
            max-width: 600px;
            min-width: 320px;
            width: 320px;
            width: calc(28000% - 167400px);
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
          "
          lang="x-size-16"
        >
          <strong><span style="color: #000000;">Keys</span></strong>
        </p>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of Front Door Keys Issued: ${frontDoorKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of Dead Bolt Keys Issued: ${deadBoltKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of Mailbox Keys Issued: ${mailboxKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of Common Area Keys Issued: ${commonKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of Remotes Issued: ${remoteKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>Quantity of other objects Issued: ${otherObjectKeys}</p>
            </div>
            <div
                class="column"
                style="
                  text-align: left;
                  color: #8e959c;
                  font-size: 14px;
                  line-height: 21px;
                  font-family: sans-serif;
                "
              >
                <p>What other objects have been issued?: ${otherObjects}</p>
            </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
          <p
                class="size-16"
                style="
                  margin: 0 auto;
                  max-width: 600px;
                  min-width: 320px;
                  width: 320px;
                  width: calc(28000% - 167400px);
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                "
                lang="x-size-16"
              >
                <strong><span style="color: #000000;">Stars (1-5)</span></strong>
              </p>

              <p>
                Was the office team friendly and helpful? ${starOne}
              </p>
              <p>
              </p>
        Was your apartment ready when you came to move-in? ${starTwo}
      <p className={styles["Question"]}>
        How satisfied are you with the cleanliness of your apartment? ${starThree}
      </p> 
      <p className={styles["Question"]}>
        Is everything in working order (appliances, door locks, faucets, etc.)? ${starFour}
      </p>
      <p className={styles["Question"]}>
        How satisfied are you with the community amenities available? ${starFive}
      </p>
      <p className={styles["Question"]}>
        Overall, how satisfied are you with your new apartment? ${starSix}
      </p>

      <div>${aboveThreeStarsOrBelow}</div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
      </td>
    </tr>
  </body>
  
  </html>
    `;
};
