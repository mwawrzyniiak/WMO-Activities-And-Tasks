using WMO.Infrastructure.Interfaces;
using WMO.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<IRUPReaderService>(new RUPReaderService());
builder.Services.AddSingleton<IScheduleService, ScheduleService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();

app.Urls.Add("http://localhost:4000");
app.MapGet("/api/v1/schedule/", 
    (IScheduleService scheduleService) => scheduleService.PrepareSchedule());

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
