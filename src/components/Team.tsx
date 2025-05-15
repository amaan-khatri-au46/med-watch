import { teamMembers } from "@/configs/team.config";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";
import React from "react";

const Team: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div
      id="team"
      className={`${isLargeScreen ? "container mx-auto" : ""} mt-20 px-4 lg:px-8`}
    >
      <div className="mt-10 lg:mt-20">
        <div data-aos="fade-right">
          <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
        </div>
      </div>

      {/* President Card */}
      {teamMembers?.map(
        (member, index) =>
          member?.isPresident && (
            <div
              key={index}
              data-aos="zoom-in"
              className="mx-auto mt-12 flex max-w-fit flex-col items-center rounded-[30px] bg-white p-6 shadow-xl"
            >
              <div>
                <img
                  src={`/members/member1.png`}
                  alt={member.name}
                  className="h-56 w-64 lg:h-64 lg:w-72"
                />
              </div>
              <h3 className="m-0 mt-4 font-sans text-2xl font-semibold text-[#083D6A]">
                {member.name}
              </h3>
              <span className="mt-2 text-sm text-[#626262]">{member.role}</span>
            </div>
          ),
      )}

      {/* Other Members Grid */}
      <div
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        data-aos="zoom-in"
      >
        {teamMembers.map(
          (member, index) =>
            !member.isPresident && (
              <div
                key={index}
                className="mx-auto flex max-w-fit flex-col items-center rounded-[30px] bg-white px-4 py-2 shadow-xl"
              >
                <div>
                  <img
                    src={`/members/member${index + 1}.png`}
                    alt={member.name}
                    className="h-64 w-72 rounded-[30px] border border-[#F0F0F0] object-cover"
                  />
                </div>
                <h5 className="m-0 mt-4 font-sans text-[16px] font-semibold text-[#083D6A]">
                  {member.name}
                </h5>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Team;
