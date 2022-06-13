#!/bin/bash
prisma generate
prisma migrate deploy
nest start