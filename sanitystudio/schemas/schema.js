import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "Profile",
  types: schemaTypes.concat([
    {
      title: "Profile",
      name: "profile",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Status",
          name: "stauts",
          type: "string",
        },
      ],
    },
  ]),
});
