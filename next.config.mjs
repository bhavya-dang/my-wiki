import nextra from "nextra";

const withNextra = nextra({});

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
