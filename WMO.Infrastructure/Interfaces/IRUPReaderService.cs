using WMO.Infrastructure.Models;

namespace WMO.Infrastructure.Interfaces
{
    public interface IRUPReaderService
    {
        List<RUP> Read(string path);
    }
}
