import { UnitTestRow } from "./components";

const Page = () => {
  return (
    <div className="flex flex-col space-y-24">
      <h1 className="title-700">Mikey Lau</h1>

      {/* Achievements */}
      <div className="flex flex-col space-y-8">
        <UnitTestRow
          type="pass"
          label="Graduate with a 1st in MSc Applied AI and Data Science"
          subtests={[
            {
              type: "pass",
              label: "Top 3 projects of the year",
            },
            {
              type: "todo",
              label: "Publish thesis",
            },
          ]}
        />
        <UnitTestRow
          type="todo"
          label="Complete Data Professional Certification with DAMA International"
        />
      </div>
    </div>
  );
};

export default Page;
