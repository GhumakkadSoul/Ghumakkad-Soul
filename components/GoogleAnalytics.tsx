<<<<<<< HEAD
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-W6CRKWGYPQ`}
      />

      <Script id="" strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-W6CRKWGYPQ', {
                page_path: window.location.pathname,
                });
            `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
=======
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-W6CRKWGYPQ`}
      />

      <Script id="" strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-W6CRKWGYPQ', {
                page_path: window.location.pathname,
                });
            `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
>>>>>>> b797115820d624260aa03a194286938b1aa4b457
