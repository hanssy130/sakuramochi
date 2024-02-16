import { ChevronRightRounded } from "@mui/icons-material";

export default function Chip({ title, description, icon, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-row justify-between items-center font-mono text-black hover:text-pink bg-white border-2 border-black hover:border-pink rounded-xl">
        <div className="p-4 md:p-5 flex flex-col">
          <div className="text-xl flex flex-row gap-2">
            {icon}
            <p className="font-bold">{title}</p>
          </div>
          <p className="text-black mt-2 font-semibold">{description}</p>
        </div>
        <div className="mr-2">
          <ChevronRightRounded fontSize="large" />
        </div>
      </div>
    </a>
  );
}
