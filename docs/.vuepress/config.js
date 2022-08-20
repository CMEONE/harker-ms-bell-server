module.exports = {
  title: "Harker MS Bell Schedule Docs",
  description: "hello world",
  base: "/docs/",
  head: [],
  themeConfig: {
    lastUpdated: "Last updated",
    repo: "CMEONE/harker-ms-bell",
    nav: [
      {text: "Back to Bell Schedule", link: "https://msbell.harker.xyz"}
    ],
    sidebar: [
      "/",
      {
        title: "General",
        collapsable: false,
        children: ["/api", "/install", "/shortcuts", "/issues"]
      },
      {
        title: "Internal",
        children: ["/internal/admin", "/internal/lunchmenu", "/internal/schemas"]
      }
    ],
    sidebarDepth: 2,
    searchPlaceholder: "Search",
    smoothScroll: true,
  },
  plugins: [
    "@vuepress/back-to-top",
    ["@vuepress/google-analytics", {ga: "UA-136862177-1"}]
  ],
};