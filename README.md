import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Paris Buedel</h1>
        <h2 className="text-xl text-gray-600">Aerospace Thermal Engineering Consultant</h2>
        <p className="text-md text-gray-500">
          Specializing in thermal analysis, hardware integration, and end-to-end spacecraft thermal systems with flight heritage across LEO, lunar, and interplanetary missions.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:paris.buedel@colorado.edu">
            <Button variant="outline"><Mail className="w-4 h-4 mr-2" />Email</Button>
          </a>
          <a href="https://linkedin.com/in/paris-buedel" target="_blank">
            <Button variant="outline"><Linkedin className="w-4 h-4 mr-2" />LinkedIn</Button>
          </a>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Core Capabilities</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Thermal system architecture and analysis for smallsats and spaceflight hardware</li>
          <li>Passive and active thermal control strategy development</li>
          <li>Multiphysics modeling (thermal–mechanical–optical)</li>
          <li>Thermal vacuum test planning and execution</li>
          <li>Custom MLI, coatings, and hardware integration</li>
          <li>NASA and ESA standards compliance</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Flight Programs</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <strong>TSIS-2 (NASA)</strong>: Lead thermal engineer for heliophysics mission measuring solar irradiance.
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <strong>MBR Explorer (UAESA)</strong>: Thermal analyst for asteroid-bound interplanetary mission.
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <strong>CIRBE (AFRL)</strong>: Lead thermal engineer; discovered new radiation belt with LEO payload.
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <strong>Libera (NOAA)</strong>: Supported electronics thermal analysis for climate-monitoring mission.
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <strong>SUDA (NASA Europa Clipper)</strong>: Assisted in thermal vacuum test for instrument hardware.
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
