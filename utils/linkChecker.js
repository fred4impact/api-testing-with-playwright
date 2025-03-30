const checkBrokenLinks = async (page) => {
    const links = await page.$$eval('a', (anchors) =>
        anchors.map(a => ({
            name: a.innerText.trim() || 'Unnamed Link',
            url: a.href
        }))
    );

    console.log(`🔗 Total Links Found: ${links.length}`);

    let brokenLinks = [];

    for (let link of links) {
        if (!link.url.startsWith('http')) continue; // Skip empty, anchor, or JavaScript links

        const response = await page.goto(link.url);
        if (response.status() === 404) {
            console.log(`❌ Broken Link: ${link.name} -> ${link.url}`);
            brokenLinks.push(link);
        }
    }

    console.log(`🚨 Total Broken Links: ${brokenLinks.length}`);
    if (brokenLinks.length > 0) {
        console.table(brokenLinks);
    }

    return brokenLinks;
};

module.exports = { checkBrokenLinks };
