using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vega.Data;
using vega.Models;
using Microsoft.EntityFrameworkCore;
//using AutoMapper;

namespace vega.Controllers
{
    public class MakesController : Controller
    {
        //private readonly ApplicationDbContext context;
        //private readonly IMapper mapper;

        /*public MakesController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await context.Makes.Include(m => m.Models).ToListAsync();
            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }*/
    }
}