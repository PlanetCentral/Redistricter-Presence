const presence = new Presence({
    clientId: "1158635774909091870"
});

presence.on("UpdateData", async () => {
    const presenceData: PresenceData = {
        largeImageKey: "redistricter_logo",
        details: "Mapping on Redistricter"
    };

    const path = document.location.pathname;

    if (path === "/") {
        presenceData.details = "Viewing homepage";
    } else if (path.includes("/maps")) {
        presenceData.details = "Viewing maps";
    } else if (path.includes("/about")) {
        presenceData.details = "Reading about Redistricter";
    } else {
        presenceData.details = "Exploring Redistricter";
    }

    presence.setActivity(presenceData);
});
