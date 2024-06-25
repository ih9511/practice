# Generated by Django 5.0.6 on 2024-06-25 03:28

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Board",
            fields=[
                ("boardId", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=128)),
                ("writer", models.CharField(max_length=32)),
                ("content", models.TextField()),
                ("regDate", models.DateTimeField(auto_now_add=True)),
                ("updDate", models.DateTimeField(auto_now=True)),
            ],
            options={
                "db_table": "board",
            },
        ),
    ]
