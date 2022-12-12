describe("metatags component", async () => {
    it("render metatags", {}, () => {
        const meta = {
            name: "description",
            content: "test_description",
        };
        const metatags_test_url = `https://localhost/metatags?name=${meta.name}&content=${meta.content}`;
        cy.visit(metatags_test_url);
        cy.get(`meta[name="${meta.name}"]`)
            .should("have.attr", "name", meta.name)
            .should("have.attr", "content", meta.content);
    });
});
