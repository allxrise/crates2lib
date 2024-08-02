chrome.runtime.onInstalled.addListener(() => {
  const rule = {
    id: 1001,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        transform: {
          scheme: "https",
          host: "lib.rs",
        },
      },
    },
    condition: {
      urlFilter: "*://crates.io/*",
      resourceTypes: ["main_frame"],
    },
  };

  chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: [rule],
      removeRuleIds: [1001],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Redirection added successfuly.");
      }
    },
  );
});
