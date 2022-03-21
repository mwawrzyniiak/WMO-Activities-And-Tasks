using WMO.Infrastructure.Interfaces;
using WMO.Infrastructure.Models;
using WMO.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<IRUPReaderService>(new RUPReaderService());
builder.Services.AddSingleton<IScheduleService, ScheduleService>();

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

app.UseCors("corsapp");

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();

app.Urls.Add("http://localhost:4000");
app.MapPost("/api/v1/schedule/",
    (ProjectParameters parameters, IScheduleService scheduleService) =>
    {
        return scheduleService.PrepareSchedule(parameters);
    }
    );

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
