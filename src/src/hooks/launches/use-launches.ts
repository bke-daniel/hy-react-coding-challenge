import { gql, useQuery } from "@apollo/client";
import { Launch } from "../../../types/Launch";

const QUERY = gql`
  query SpaceXLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      details
      mission_name
      static_fire_date_unix
    }
  }
`;

type Response = {
  launches: Launch[];
};

type Vars = {
  limit?: number;
};

export default function useLaunches() {
  const { data, loading, error } = useQuery<Response, Vars>(QUERY, {
    variables: { limit: 100 },
  });
  return {
    launches: data?.launches,
    loading,
    error,
  };
}
