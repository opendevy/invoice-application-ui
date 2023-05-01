import React, {useEffect, useState} from "react";
import moment from "moment";
import * as WorkService from '../../../../services/work.service';
import {FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import {FaSearch} from "react-icons/fa";

const AllHistories = () => {
  const [histories, setHistories] = useState<any[]>();
  const [keyword, setKeyword] = useState('');
  
  useEffect(() => {
    const query: any = {};
    if (keyword) {
      query.keyword = keyword;
    }
    WorkService.fetchWorkHistories(query).then((res) => {
      setHistories(res);
    })
  }, [keyword]);
  
  return (
    <div className="my-4">
      <div className="my-4">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Search Histories
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            placeholder="Search keyword..."
            startAdornment={
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border">
            <td className="p-2">Employee</td>
            <td className="p-2">Project</td>
            <td className="p-2">Start</td>
            <td className="p-2">End</td>
          </tr>
        </thead>
        <tbody>
        {
          histories && histories.length > 0 && histories.map((history) => (
            <tr key={history._id} className="border">
              <td className="p-2">
                {history.employee.name}
              </td>
              <td className="p-2">
                {history.project.name}
              </td>
              <td className="p-2">
                {moment(history.startTime).format('hh:mm:ss MMMM, DD, YYYY')}
              </td>
              <td className="p-2">
                {moment(history.endTime).format('hh:mm:ss MMMM, DD, YYYY')}
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default AllHistories;
