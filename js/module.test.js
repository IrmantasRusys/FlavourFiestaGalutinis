import { getTime } from "./module";

describe("getTime", () => {
  it("should return correct time for minutes less than 60", () => {
    expect(getTime(45)).toEqual({ time: 45, timeUnit: "minutes" });
  });

  it("should return correct time for hours less than 24", () => {
    expect(getTime(120)).toEqual({ time: 2, timeUnit: "hours" });
  });

  it("should return correct time for days", () => {
    expect(getTime(1440)).toEqual({ time: 1, timeUnit: "days" });
  });

  it("should return correct time for more than one day", () => {
    expect(getTime(2880)).toEqual({ time: 2, timeUnit: "days" });
  });

  it("should return correct time for mixed day and hour values", () => {
    expect(getTime(1500)).toEqual({ time: 1, timeUnit: "days" });
  });

  it("should handle zero minutes", () => {
    expect(getTime(0)).toEqual({ time: 0, timeUnit: "minutes" });
  });
});
