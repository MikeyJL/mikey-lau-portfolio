import { UnitTestRow } from "./components";

const Page = () => {
  return (
    <div className="flex flex-col space-y-12 py-8">
      <div className="w-fit border-4 border-double border-black py-6 pl-12 pr-16">
        {/* prettier-ignore */}
        <h1 className="whitespace-pre body-400" aria-label="Mikey Lau">
        &nbsp;&nbsp;&nbsp;&nbsp;__  ____ __              __            <br />
        &nbsp;&nbsp;&nbsp;/  |/  (_) /_____ __ __  / /  ___ ___ __<br />
        &nbsp;&nbsp;/ /|_/ / /  '_/ -_) // / / /__/ _ `/ // /<br/>
        &nbsp;/_/  /_/_/_/\_\\__/\_, / /____/\_,_/\_,_/ <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/___/
      </h1>
      </div>

      {/* Achievements */}
      <div className="flex flex-col space-y-4">
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
