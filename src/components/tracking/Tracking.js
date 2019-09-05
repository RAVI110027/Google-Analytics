import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-146365365-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  setTimeout(() => {
    eventListner();
  }, 3000);
};

export const eventListner = () => {
  ReactGA.event({
    category: "User",
    action: "Created an Account",
    label: "Homepage Thing"
  });

  // ReactGA.event({
  //   category: "Promotion",
  //   action: "Displayed Promotional Widget",
  //   label: "Homepage Thing",
  //   nonInteraction: true
  // });
};
