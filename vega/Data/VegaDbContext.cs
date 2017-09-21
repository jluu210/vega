using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vega.Models;

namespace vega.Data
{
    public class VegaDbContext : DbContext
    {
        public virtual DbSet<Make> Makes { get; set; }
        public virtual DbSet<Feature> Features { get; set; }

        public VegaDbContext(DbContextOptions<VegaDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleFeature>().HasKey(vf => 
            new { vf.VehicleId, vf.FeatureId });
        }
        
    }
}
