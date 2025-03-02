import { expect } from 'chai';
import BlankProjectData from '../../test-data/blankProject-data.json';
import config from '../../../config';
import { ApiClient } from '../../api/apiclient';
const apiClient = new ApiClient(`${config.baseUrl}`);

/**
 * This test suite verifies the functionality of project-related API endpoints.
 * 
 * - "Project Information" test checks if the project information can be retrieved
 *   and validated against expected values using a GET request.
 * 
 * - "Create an Issue" test ensures that an issue can be created with a specific
 *   title and label using a POST request, and verifies the response data.
 * 
 * - "Delete the project" test, which is currently skipped, would test the deletion
 *   of a project and all its associated resources using a DELETE request.
 */
describe("Project Information", () => {
  it("Get and verify the Project information ", async () => {
    const response = await apiClient.get(`projects/${BlankProjectData.projectId}`);
    console.log(response.data);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("id", Number(BlankProjectData.projectId));
    expect(response.data).to.have.property("name", BlankProjectData.projectName);
  });
});

describe("Create an Issue", () => {
  it("Create an issue with title & label = BUG", async () => {
    const queryParams = { title: "Issue with the dashboard", labels: "bug" };
    const response = await apiClient.post(`projects/${BlankProjectData.projectId}/issues`, null, queryParams);
    console.log(response.data);
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property("project_id", Number(BlankProjectData.projectId));
    expect(response.data).to.have.property("title", queryParams.title);
    expect(response.data).to.have.property("issue_type", 'issue');
  });
});

describe.skip("Delete the project", () => {
  it("Delete a project including all associated resources", async () => {
    const response = await apiClient.delete(`projects/${BlankProjectData.projectId}`);
    console.log(response.data);
    expect(response.status).to.equal(202);
  });
});