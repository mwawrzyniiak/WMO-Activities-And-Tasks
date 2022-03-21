namespace WMO.Infrastructure.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public string Role { get; set; }
        public List<int> Predecessors { get; set; }

        public string Description { get; set; }
    }
}

