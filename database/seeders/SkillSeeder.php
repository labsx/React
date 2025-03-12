<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Profile;
use App\Models\Skills;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Skills::factory()->create([
            'user_id' => 1,
            'name' => 'Skill 1'
        ]);

        Skills::factory()->create([
            'user_id' => 1,
            'name' => 'Skill 2'
        ]);

        Skills::factory()->create([
            'user_id' => 1,
            'name' => 'Skill 3'
        ]);

        Skills::factory()->count(3)->create([
            'user_id' => 3
        ]);
    }
}
