import { useEffect, useState } from 'react'
import DiseasesTable from '../components/GenericTable'
import diseasesService from 'services/diseases-service'

const Profile = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <DiseasesTable
          simpleColumns={["Remarks"]}
          sortColumns={[
            {
              name: "Disease",
              sort: "",
              direction: ["DiagnosisDesc", "DiagnosisAsc"],
            },
          ]}
          filterField={[
            {
              name: "Disease",
              result: undefined,
            },
          ]}
          getAll={() => {}} //diseasesService.getAll
          items={[]}
          sizeTable={1700}
        />
    </div>
  );
}

export default Profile