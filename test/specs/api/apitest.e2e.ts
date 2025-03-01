import { expect } from 'chai';
import BlankProjectData from '../../test-data/blankProject-data.json';
import config from '../../../config';
import { ApiClient } from '../../api/apiclient';
const apiClient = new ApiClient(`${config.baseUrl}`);

describe("Project Information", () => {
  it("Get and verify the Project information ", async () => {
    const response = await apiClient.get(`projects/${BlankProjectData.projectId}`);
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

describe("Delete the project", () => {
    it("Delete a project including all associated resources", async () => {
      const response = await apiClient.delete(`projects/${BlankProjectData.projectId}`);
      console.log(response.data);
      expect(response.status).to.equal(202);
    });
  });