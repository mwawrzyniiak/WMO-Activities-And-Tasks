﻿using WMO.Infrastructure.Interfaces;
using WMO.Infrastructure.Models;

namespace WMO.Infrastructure.Services
{
    public class ScheduleService : IScheduleService
    {
        public readonly IRUPReaderService RUPReaderService;

        public ScheduleService(IRUPReaderService RUPReaderService)
        {
            this.RUPReaderService = RUPReaderService;
        }

        public List<Models.Task> PrepareSchedule(ProjectParameters projectParameters)
        {
            List<Models.Task> schedules = new List<Models.Task>();
            schedules.Add(new Models.Task() { Id = 5 });

            var rups = RUPReaderService.Read(Dictionary.CSV_PATH);

            foreach (var rup in rups)
            {
                if (!(rup.Dyscyplina.HasFlag(projectParameters.Disciplines)) || rup.Kategorie.HasFlag(projectParameters.ProjectSize))
                {
                    continue;
                }
                schedules.Add(new Models.Task()
                {
                    Id = rup.Index,
                    Duration = 1,
                    Name = rup.BreakdownElement,
                    Predecessors = rup.Predecessors,
                    Role = "",
                    Description = rup.Uzasadnienie,
                    Discipline = rup.Dyscyplina,
                    Phase = rup.Phase.ToString()
                });;
            }
            return schedules;
        }
    }
}
