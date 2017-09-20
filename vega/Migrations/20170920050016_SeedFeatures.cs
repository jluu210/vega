using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace vega.Migrations
{
    public partial class SeedFeatures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Air Bags')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Power Windows')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Built in Wifii')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Navigation')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Features WHERE Name IN ('Air Bags','Power Windows','Built in Wifii','Navigation')");
        }
    }
}
