using WMO.Infrastructure.Models;

namespace WMO.Infrastructure.Interfaces
{
    public interface IScheduleService
    {
        List<Models.Task> PrepareSchedule(ProjectParameters projectParameters);
    }
}
