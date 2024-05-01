import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/Button";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Home() {
  return (
    <>
      <section className="mt-6">
        <div className="container flex items-center gap-8">
          <div className="max-w-[275px] w-full">
            <ul className="bg-white">
              <Button className="flex items-center gap-4 bg-transparent hover:bg-transparent">
                <TfiMenuAlt color="#000" fontSize={20} />
                <p className="text-darkblack">Shop By Department</p>
              </Button>
            </ul>
          </div>
          <div className="max-w-[1200px] w-full">
            <Slider/>
          </div>
        </div>
      </section>
    </>
  );
}
