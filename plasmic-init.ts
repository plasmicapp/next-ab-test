import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      // ID of a project you are using
      id: "e4zz2VXMkxdmVUi2KdGouZ",
      // API token for that project
      token: "bEDUIgBpR0BQzSKI9wq8O9YB9yPMa8gyLOFYnh6KwSCrNODPz5VCediTOmTdauFjqr52rUZIudwxaXGug"
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
