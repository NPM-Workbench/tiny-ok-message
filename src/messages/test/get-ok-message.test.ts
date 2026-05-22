import { getOkMessage } from "../get-ok-message.js";

describe("getOkMessage", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "fetch", {
      configurable: true,
      value: jest.fn()
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches the OK message from DummyJSON", async () => {
    const fetchSpy = jest.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ status: "200", message: "hello world" })
    } as Response);

    await expect(getOkMessage({ message: "hello world" })).resolves.toEqual({
      status: "200",
      message: "hello world"
    });

    expect(fetchSpy).toHaveBeenCalledWith("https://dummyjson.com/http/200/hello%20world");
  });

  it("throws when the request fails", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({})
    } as Response);

    await expect(getOkMessage({ message: "nope" })).rejects.toThrow(
      "Failed to fetch OK message. Status: 500"
    );
  });
});
