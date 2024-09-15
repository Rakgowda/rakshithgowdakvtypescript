beforeEach(() => {
    Object.defineProperty(window,'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query:string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });