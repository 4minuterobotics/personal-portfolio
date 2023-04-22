import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

import React from 'react'

const MailchimpForm = () => {
    const postUrl = `${import.meta.env.VITE_APP_MAILCHIMP_URL}?u=${import.meta.env.VITE_APP_MAILCHIMP_U}&id=${import.meta.env.VITE_APP_MAILCHIMP_ID}`;

    return (
      <>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Newsletter
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
              />
          )}
          />
      </>
    )
}

export default MailchimpForm
