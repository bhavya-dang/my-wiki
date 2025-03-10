import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
});
