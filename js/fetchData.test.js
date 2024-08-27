import { fetchData } from "./api";
import fetchMock from "jest-fetch-mock";

describe("fetchData Integration Tests", () => {
  const queries = ["q=chicken", "calories<100"];
  const mockData = {
    hits: [
      {
        recipe: {
          label: "Chicken Salad",
          calories: 95,
        },
      },
    ],
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should fetch data correctly from the API and call successCallback with the data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const successCallback = jest.fn();

    await fetchData(queries, successCallback);

    expect(successCallback).toHaveBeenCalled();
    expect(successCallback).toHaveBeenCalledWith(mockData);
  });

  it("should handle errors from the API", async () => {
    fetchMock.mockReject(new Error("API error"));

    const successCallback = jest.fn();
    const errorCallback = jest.fn();

    try {
      await fetchData(queries, successCallback);
    } catch (error) {
      errorCallback(error);
    }

    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalledWith(new Error("API error"));
  });

  it("should handle cases with empty queries array", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const successCallback = jest.fn();

    await fetchData([], successCallback);

    // Patikriname, ar teisingai apdorotas URL su tuščiu užklausos masyvu
    expect(successCallback).toHaveBeenCalled();
    expect(successCallback).toHaveBeenCalledWith(mockData);
  });

  it("should handle cases with malformed queries", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const successCallback = jest.fn();

    await fetchData(["malformed=query", "anotherQuery"], successCallback);

    // Patikrinkite, ar sistema tinkamai apdoroja neteisingą užklausos sintaksę
    expect(successCallback).toHaveBeenCalled();
    expect(successCallback).toHaveBeenCalledWith(mockData);
  });

  it("should handle fetch failure properly", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });

    const successCallback = jest.fn();
    const errorCallback = jest.fn();

    try {
      await fetchData(queries, successCallback);
    } catch (error) {
      errorCallback(error);
    }

    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalledWith(expect.any(Error));
  });
});
