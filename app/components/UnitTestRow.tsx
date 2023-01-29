import classNames from "classnames";
import { FC } from "react";

export type UnitTestType = "todo" | "pass";

export type UnitTestSubTest = {
  type: UnitTestType;
  label: string;
};

type UnitTestRowProps = {
  type: UnitTestType;
  label: string;
  subtests?: UnitTestSubTest[];
  className?: string;
};

const UnitTestRow: FC<UnitTestRowProps> = ({
  type,
  label,
  subtests,
  className,
}) => {
  return (
    <div>
      {/* Main test */}
      <div className={classNames("flex items-center", className)}>
        <div
          className={classNames("mr-2 px-3", {
            "bg-green-500": type === "pass",
            "bg-gray-300": type === "todo",
          })}
        >
          <p className="body-700 uppercase">{type}</p>
        </div>
        <p>{label}</p>
      </div>

      {/* Sub test */}
      {subtests && subtests.length > 0 && (
        <div className="mt-4 flex flex-col space-y-2">
          {subtests.map((subtest) => (
            <div
              key={subtest.label.replaceAll(" ", "-")}
              className="flex items-center pl-8"
            >
              <p
                className={classNames("mr-2", {
                  "text-green-500": subtest.type === "pass",
                })}
              >
                {subtest.type === "pass" ? "✓" : "-"}
              </p>
              <p className="body-400">{subtest.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UnitTestRow;
